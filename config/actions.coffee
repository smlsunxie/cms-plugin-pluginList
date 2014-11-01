module.exports = [
  {
    "name": "installPlugin",
    execution: (params, cb) ->
      console.log "params", params
      app.models.Plugin.install params.url, params.name, (error, newPlugin) ->
        cb()
  }
]
