class ApplicationController < ActionController::API
#     rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
#     rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
#     include ActionController::Cookies

#     before_action :authorized_buyer


#     def current_buyer
#       buyer = Buyer.find_by(id: session[:buyer_id])
#       buyer
#     end

#     def authorized_buyer
#         return render json: { error: "Not authorized" }, status: :unauthorized unless current_buyer
#     end

#     private

#     def render_unprocessable_entity(invalid)
#         render json: {errors: invalid.record.errors}, status: :unprocessable_entity
#     end 

#      def render_not_found(error)
#         render json: {errors: {error.model => "Not Found"}}, status: :not_found
#     end 
end
