class PurchasedItemSerializer < ActiveModel::Serializer
  attributes :id, :buyer_id, :item_id, :sold_status, :purchase_date
end
