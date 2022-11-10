class BuyerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password_digest, :address, :purchased_items
  has_many :purchased_items
end
