class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    

    def current_user
        @current_user ||= User.find_by_id session[:user_id]
        # if there is no current user signed in then we make current_user equal to the session[:user_id]
    end
    helper_method :current_user
    # this helper_method makes the method available to all the views of our application

    # def user_signed_in?
    #     current_user.present?
    # end
    # helper_method :user_signed_in?

    def authenticate_user!
        unless current_user.present?
            render(json:{status: 401})
        end
    end
    # this let's us check whether a user is signed in, if not they will not be allowed to post or view some pages and will be prompted to sign in
end
