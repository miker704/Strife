Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show, :update, :destroy]
              patch '/users/:id/removephone/', to: 'users#delete_PhoneNumber', as: 'delete_PhoneNumber'
              patch '/users/:id/changePassword/', to: 'users#change_Password', as: 'change_Password'
              patch '/users/:id/changeUserPFP/', to: 'users#change_User_PFP', as: 'change_User_PFP'
              patch '/users/:id/changeUserBanner/', to: 'users#change_User_Banner', as: 'change_User_Banner'
              patch '/users/:id/disableAccount/', to: 'users#disable_Account', as: 'disable_Account'
              get   '/search/:username', to: 'users#search', as: 'user_search'
              get    '/fetchbystrifeId/:strife_id_tag', to: 'users#fetch_via_strife_id', as: 'fetch_via_strife_id'
              get    '/users/:id/extractData/', to: 'users#user_data_extraction', as: 'user_data_extraction'
    resource  :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
              post '/servers/join/', to: 'servers#join_server', as: 'join_server'
              patch '/servers/:id/verifyDeletion/', to: 'servers#verify_Name', as: 'verify_Name'
              get '/exploreServers/', to: 'servers#explore_Servers', as: 'explore_Servers'
    resources :server_memberships, only: [:create, :destroy]
    resources :channels, only: [:show, :update, :create, :destroy]
    resources :channel_memberships, only: [:create, :destroy]
    resources :messages, only: [:create, :update, :destroy]
    resources :friendships, only: [:index,:create,:show]
              patch 'friendships', to: 'friendships#update'
              delete 'friendships', to: 'friendships#destroy'
              post '/friendships/blockuser/', to: 'friendships#block_User', as: 'block_User'
              patch '/friendships/unblockuser/', to: 'friendships#unblock_User', as: 'unblock_User'
    resources :dm_members, only: [:create,:destroy]
              get '/dm_members/dms_status', to: 'dm_members#show', as: 'dm_membership_status'
    resources :dm_messages, only: [:create, :update, :destroy]
    resources :dm_servers, only: [:index, :show, :create, :update, :destroy]
    resources :calls, only: [:create]
    resources :video_calls, only: [:create]
    resources :voice_calls, only: [:create]


  end


  mount ActionCable.server => "/cable"
  
  root to: 'static_pages#root'
  # get '*path', to: "static_pages#frontend_index"
end
