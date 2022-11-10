class PurchasedItemSerializer < ActiveModel::Serializer
  attributes :id, :buyer_id, :item_id, :purchase_date
  # belongs_to :item
  # belongs_to :buyer
end
