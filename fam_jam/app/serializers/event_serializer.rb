class EventSerializer < ActiveModel::Serializer
  attributes(
    :id, 
    :title, 
    :description, 
    :location, 
    :start_date, 
    :end_date, 
    :reminder, 
    :is_complete,
  )

   has_many :users, key: :guests
   class UserSerializer < ActiveModel::Serializer
    attributes :email
   end
end


