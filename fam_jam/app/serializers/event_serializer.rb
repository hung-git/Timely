class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :start_date, :end_date
end
