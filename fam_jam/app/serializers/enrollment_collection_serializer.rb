class EnrollmentCollectionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :is_owner
end
