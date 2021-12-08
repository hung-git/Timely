class Api::V1::EventsController < ApplicationController
  before_action :get_event, except: [:index, :create]

  # before_action :authenticate_user!, except: [:index, :show]

  # before_action :authorize_user!, only: [:update, :destroy]
  
  def index
    events = current_user.events.order(created_at: :DESC)
    # byebug

    render json: events
    
  end

  def show
    event = Event.find params[:id]
    # byebug
    render json: event
  end

  def create
    # puts event_params
    event = Event.new(event_params)
    event.user = current_user
    
    event.save!
    render json: { id: event.id }
    # if event.save
    #   # Enrollment.create(user_id: current_user.id, event_id: event.id)
    #   render json: { id: event.id }
    # else
    #   render json: { error: event.errors.messages }, status: 422
    # end
  end

  def update
    if @event.update(event_params)
        render json:{id: @event.id}
    else
        render json:{errors: @event.errors, status: 422}
    end
  end

  def destroy
    if @event.destroy
      render(json:{ status:200 })
    else
      render(json:{ status:500 })
    end
  end

  private
  
  def get_event
     @event = Event.find(params[:id])    
  end

  def event_params
    params.require(:event).permit(:title, :description, :start_date, :end_date, :reminder, :location, :guests)
  end
end
