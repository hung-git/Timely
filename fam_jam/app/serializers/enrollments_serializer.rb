class EnrollmentsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :is_owner

  belongs_to :user, key: :user
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name
  end
end
