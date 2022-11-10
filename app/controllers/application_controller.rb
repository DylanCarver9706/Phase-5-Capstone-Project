class ApplicationController < ActionController::API
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    include ActionController::Cookies

    before_action :authenticate_user

    # def authorized_buyer
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :buyer_id
    # end

    # def current_buyer
    #     Buyer.find_by(id: session[:buyer_id])
    # end


    private

    def authenticate_user
        @current_user ||= Buyer.find_by(id: session[:buyer_id])
        render json: { error: "Please log in or sign up to view"}, status: :unauthorized unless @current_user 
    end

    def invalid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
