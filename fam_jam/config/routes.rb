Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/new'
      get 'users/create'
    end
  end
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :events
      resources :users
    end
  end

  
  get '*path', to: 'home#index', via: :all
end
