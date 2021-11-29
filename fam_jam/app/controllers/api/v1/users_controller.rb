class Api::V1::UsersController < ApplicationController
  def create
    user_params = params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    user = User.new user_params
    if user.save
        # session[:user_id] = user.id
        render json: { id: user.id }
    else
        render(
            json: { errors: user.errors.messages },
            status: 422 #Unprocessable Entity
        )
    end
  end

  def current
    render json: current_user
  end

  # def index
  #   users = User.all
    
  #   render json: users
  # end
end
