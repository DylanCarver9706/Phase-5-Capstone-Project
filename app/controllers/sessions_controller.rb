# class SessionsController < ApplicationController
#     skip_before_action :authorized_buyer, only: [:create]

#     def create # '/login' 
        
#         buyer = Buyer.find_by(name:params[:name])
        
#         if buyer&.authenticate(params[:password])
#         session[:buyer_id] = buyer.id
    
#           render json: buyer, status: :ok
#         else 
#           render json: {errors: "Invalid Password or Username"}, status: :unauthorized
#         end
#       end

#       def delete
#         session.delete :buyer_id
#         head :no_content
#       end 
# end
