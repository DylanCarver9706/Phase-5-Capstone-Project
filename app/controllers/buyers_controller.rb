class BuyersController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    # def show
        
    #     current_buyer = Buyer.find_by(session[:buyer_id])
    #     render json: current_buyer
    # end

    # def create
    #     buyer = Buyer.create!(buyer_params)
    #     # session[:buyer_id] = buyer.id
    #     render json: buyer, status: :created
    # end

    def show
        render json: @current_user, status: :ok
    end

    def create
        user = Buyer.create!(buyer_params)
        session[:buyer_id] = user.id 
        render json: user, status: :created 
    end

    private

    def buyer_params
        params.permit(:username, :full_name, :email, :password, :address)
    end

end
