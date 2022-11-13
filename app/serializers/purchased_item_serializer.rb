class PurchasedItemSerializer < ActiveModel::Serializer
  attributes :id, :buyer, :item, :purchase_date
  # belongs_to :item
  # belongs_to :buyer
end
