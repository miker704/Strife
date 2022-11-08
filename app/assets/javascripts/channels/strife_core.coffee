# App.strife_core = App.cable.subscriptions.create "StrifeCore",
#   connected: () -> console.log("connected to $TR!F3"),
#     # Called when the subscription is ready for use on the server

#   disconnected: ->
#     # Called when the subscription has been terminated by the server

#   received: (data) ->console.log("%c [HeartBeat @ #{Math.floor((Math.random()*(150-59)+59))}]", 'color:#881798;')
  
 # Called when there's incoming data on the websocket for this channel

