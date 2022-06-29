Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show, :update, :destroy]
    resource  :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :server_memberships, only: [:create, :destroy]
    resources :channels, only: [:show, :update, :create, :destroy]
    resources :channel_memberships, only: [:create, :destroy]

  end


 

  root to: 'static_pages#root'

end
