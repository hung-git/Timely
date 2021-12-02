class Event < ApplicationRecord
    
    has_many :enrollments, dependent: :destroy
    has_many :users, through: :enrollments, source: :user

    def owner
        self.enrolled_users.where('is_owner = true')[0]
    end

end
