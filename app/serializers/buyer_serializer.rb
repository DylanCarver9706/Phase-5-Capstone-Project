class BuyerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password_digest, :address
end
