class Api::V1::EnrollmentsController < ApplicationController
    before_action :authenticate_user!

    def index
        enrollments = current_user.enrollments.order(created_at: :desc)

        render json: enrollments, each_serializer: EnrollmentCollectionSerializer
    end
    def create
    end

    def update
    end

    def destroy
    end


    private
    def find_enrollment
        enrollment = Enrollment.find params[:id]
    end

    def authorize_user!
        
    end
end
