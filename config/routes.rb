Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :purchased_items, only: [:show, :create]
  resources :buyers, only: [:show, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/signup', to: 'buyers#create'
  get '/me', to: 'buyers#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # route to test your configuration
  # get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
