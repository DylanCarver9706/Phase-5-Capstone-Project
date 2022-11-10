class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    # def create # '/login' 
        
    #     buyer = Buyer.find_by(email:params[:email])
        
    #     if buyer&.authenticate(params[:password])
    #     session[:buyer_id] = buyer.id
    
    #       render json: buyer, status: :created
    #     else 
    #       render json: {errors: "Invalid Password or Username"}, status: :unauthorized
    #     end
    #   end

    #   def destroy
    #     # session[:buyer_id] = nil
    #     session.delete :buyer_id
    #     head :no_content
    #   end 

      def create
        user = Buyer.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:buyer_id] = user.id
            render json: user 
        else
            render json: { error: "Login credentials are incorrect" }, status: :unauthorized
        end 
    end

    def destroy
        session.delete :buyer_id
        head :no_content
    end
end
