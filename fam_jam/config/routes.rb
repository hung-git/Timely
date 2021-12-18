Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'

  
  # get '/redirect', to: 'calendar#redirect', as: 'redirect'
  # get '/callback', to: 'calendar#callback', as: 'callback'
  # get '/calendars', to: 'calendar#calendars', as: 'calendars'
  # get '/events/:calendar_id', to: 'example#events', as: 'events', calendar_id: /[^\/]+/
  
  
  root 'home#index'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      # get 'redirect', to: 'calendar#redirect', as: 'redirect'
      # get 'callback', to: 'calendar#callback', as: 'callback'
      # get 'calendars', to: 'calendar#calendars', as: 'calendars'
      # get 'tasks/:calendar_id', to: 'calendar#tasks', as: 'tasks', calendar_id: /[^\/]+/

      resources :events
      resource :session, only: [:create, :destroy]
      resources :enrollments, only: [:index, :create, :update, :destroy]
      
      resources :users, only: [:new, :create] do
        get :current, on: :collection
      end
    end
  end

  
  get '*path', to: 'home#index', via: :all
end
