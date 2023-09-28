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
              get    '/fetchbyuserbynameorIdTag/', to: 'users#fetch_user_by_strife_id_or_username', as: 'fetch_user_by_strife_id_or_username'
              get    '/users/:id/extractData/', to: 'users#user_data_extraction', as: 'user_data_extraction'
              get    '/users/:id/mutualFriends/', to: 'users#mutual_friends', as: 'mutual_friends'
              get    '/users/:id/mutualServers/', to: 'users#mutual_servers', as: 'mutual_servers'

    resource  :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
              post '/servers/join/', to: 'servers#join_server', as: 'join_server'
              patch '/servers/:id/verifyDeletion/', to: 'servers#verify_Name', as: 'verify_Name'
              get '/exploreServers/', to: 'servers#explore_Servers', as: 'explore_Servers'
              patch '/servers/:id/changeServerBanner', to: 'servers#change_server_banner', as: 'change_server_banner'
              patch '/servers/:id/changeServerInviteSplash', to: 'servers#change_server_invite_splash', as: 'change_server_invite_splash'
    resources :server_memberships, only: [:create,:show,:destroy]
              get  '/server_memberships/memberdata/', to:'server_memberships#show', as: 'get_server_membership'
              get '/servers/:id/server_memberships/memberdata/', to:'server_memberships#show' , as: 'get_server_membership_data'
              get  '/servers/:id/server_memberships/isservermember/', to:'server_memberships#is_server_member', as: 'is_server_member'
              post '/server_memberships/injectviadms/', to: 'server_memberships#createViaInjextion', as: 'createViaInjextion'
    resources :channels, only: [:show, :update, :create, :destroy]
              post '/channels/createviaservertemplate/', to: 'channels#create_via_server_setup', as: 'create_via_server_setup'
    resources :channel_memberships, only: [:create, :destroy]
    resources :messages, only: [:create, :update, :destroy]
    resources :friendships, only: [:index,:create,:show]
              patch 'friendships', to: 'friendships#update'
              delete 'friendships', to: 'friendships#destroy'
              post '/friendships/blockuser/', to: 'friendships#block_User', as: 'block_User'
              patch '/friendships/unblockuser/', to: 'friendships#unblock_User', as: 'unblock_User'
              get 'friendships/:id/onlinefriends/', to: 'friendships#fetchOnlineFriends', as: 'fetchOnlineFriends'
              get 'friendships/:id/offlinefriends/', to: 'friendships#fetchOfflineFriends', as: 'fetchOfflineFriends'
              get 'friendships/:id/incomingfriendrequests/', to: 'friendships#fetchIncomingFriendRequests', as: 'fetchIncomingFriendRequests'
              get 'friendships/:id/outgoingfriendrequests/', to: 'friendships#fetchOutgoingFriendRequests', as: 'fetchOutgoingFriendRequests'
              get 'friendships/:id/allfriends/', to: 'friendships#fetchAllFriends', as: 'fetchAllFriends'
              get 'friendships/:id/allfriendssorted/', to: 'friendships#fetchAllFriendsSorted', as: 'fetchAllFriendsSorted'
    resources :dm_members, only: [:create,:show,:destroy]
              get '/dm_members/getDmMember/', to: 'dm_members#show', as: 'get_dm_membership'
              get '/dm_servers/:id/dm_members/getDmMemberData/', to:'dm_members#show' , as: 'get_dm_server_membership_data'
              get '/dm_servers/:id/dm_members/isdmMember/', to: 'dm_members#is_dm_member', as: 'is_dm_member'
    resources :dm_messages, only: [:create, :update, :destroy]
    resources :dm_servers, only: [:index, :show, :create, :update, :destroy]
              patch '/dm_servers/:id/updatedmsName/', to: 'dm_servers#update_dm_name', as:'update_dms_name'
    resources :calls, only: [:create]
    resources :video_calls, only: [:create]
    resources :voice_calls, only: [:create]


  end


  mount ActionCable.server => "/cable"
  
  root to: 'static_pages#root'
  # get '*path', to: "static_pages#frontend_index"
end
