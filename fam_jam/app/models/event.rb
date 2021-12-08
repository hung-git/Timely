class Event < ApplicationRecord
    
    # has_many :enrollments, dependent: :destroy
    # has_many :users, through: :enrollments, source: :user

    belongs_to :user

    # validates :title, :description, presence: true 
    validates :title, presence: {message: "A Title Must Be Provided"}
    # validates :description, presence: {message: ""}

end
