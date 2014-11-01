window.modules = {}
React = window.React = require("react")
PluginList = require("./PluginList")
mountNode = document.getElementById("app")

client.models.Route.find {}, (error, result) ->
  console.log "result", result
  React.renderComponent(<PluginList />, mountNode);
