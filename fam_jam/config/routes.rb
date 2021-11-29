Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  namespace :api do
    namespace :v1 do
      get 'users/new'
      get 'users/create'
    end
  end
  root 'home#index'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :events
      resource :session, only: [:create, :destroy]
      
      resources :users, only: [:create] do
        get :current, on: :collection
      end
    end
  end

  
  get '*path', to: 'home#index', via: :all
end
