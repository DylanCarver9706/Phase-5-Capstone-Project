class SessionsController < ApplicationController
    # skip_before_action :current_buyer, only: [:create, :destroy]

    def create # '/login' 
        
        buyer = Buyer.find_by(email:params[:email])
        
        if buyer&.authenticate(params[:password])
        session[:buyer_id] = buyer.id
    
          render json: buyer, status: :created
        else 
          render json: {errors: "Invalid Password or Username"}, status: :unauthorized
        end
      end

      def destroy
        # session[:buyer_id] = nil
        session.delete :buyer_id
        head :no_content
      end 
end
