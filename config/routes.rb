Rails.application.routes.draw do
  #====================Auth====================
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users 

  resources :accessories
  post '/users/:user_id/sneakers', to: 'sneakers#create_sneaker_by_user'

  resources :sneakers
  post '/users/:user_id/accessories', to: 'accessories#create_accessory_by_user'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
