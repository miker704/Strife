Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show, :update, :destroy]
              patch '/users/:id/removephone/', to: 'users#delete_PhoneNumber', as: 'delete_PhoneNumber'
              patch '/users/:id/changePassword/', to: 'users#change_Password', as: 'change_Password'
              patch '/users/:id/changeUserPFP/', to: 'users#change_User_PFP', as: 'change_User_PFP'
              patch '/users/:id/disableAccount/', to: 'users#disable_Account', as: 'disable_Account'
              get   '/search/:username', to: 'users#search', as: 'user_search'
    resource  :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
              post '/servers/join/', to: 'servers#join_server', as: 'join_server'
    resources :server_memberships, only: [:create, :destroy]
    resources :channels, only: [:show, :update, :create, :destroy]
    resources :channel_memberships, only: [:create, :destroy]
    resources :messages, only: [:create, :update, :destroy]
    resources :friendships, only: [:index,:create, :update, :destroy]
    resources :dm_members, only: [:create,:destory]
    resources :dm_messages, only: [:create, :update, :destroy]
    resources :dm_servers, only: [:index, :show, :create, :destroy]

  end


 

  root to: 'static_pages#root'

end
