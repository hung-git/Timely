class Api::V1::EventsController < ApplicationController
  before_action :get_event, except: [:index, :create]
  
  def index
    events = Event.order(created_at: :DESC)

    render json: events
  end

  def show
    if @event
      render json: @event
    else
      render json: { error: "Event Not Found!" }
    end
  end

  def create
    event = Event.new(event_params)

    if event.save
      render json: { id: event.id }
    else
      render json: { error: event.errors.messages }, status: 422
    end
  end

  def update
    if event.update(event_params)
        render json:{id: event.id}
    else
        render json:{errors: event.errors, status: 422}
    end
  end

  def destroy
    if @event.destroy
      render(json:{ status:200 })
    else
      render(json:{ status:500 })
    end
  end

  def get_event
     @event = Event.find(params[:id])    
  end

  def event_params
    params.require(:event).permit(:title, :description, :start_date, :end_date)
  end
end
