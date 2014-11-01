
PluginList = React.createClass(
  getInitialState: ->
    that = @

    plugins = [

      {
        url: "https://github.com/smlsunxie/cms-plugin-sample.git"
        name: "cms-plugin-sample"
      }
      {
        url: "https://github.com/smlsunxie/cms-plugin-routeList.git"
        name: "cms-plugin-routeList"
      }
      {
        url: "https://github.com/smlsunxie/cms-plugin-foot.git"
        name: "cms-plugin-foot"
      }


    ]

    {plugins: plugins}
  installPlugin: (plugin) ->
    client.models.Route.action "cms-plugin-pluginList", "installPlugin", plugin, (error, result) ->
      alert("install finish ~");

  render: ->
    that = this

    initPluginList = (plugin) ->
      installPlugin = that.installPlugin.bind(that, plugin)

      <tr>
        <td>{plugin.url}</td>
        <td>{plugin.name}</td>
        <td><button onClick={installPlugin}>{"install"}</button></td>
        <td></td>
      </tr>

    <div className="panel panel-default">
      <div className="panel-heading">route list</div>
      <table className="table">
        <thead>
          <tr>
            <th>plugin url</th>
            <th>plugin name</th>
            <th>install</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {@.state.plugins.map(initPluginList)}
        </tbody>
      </table>
    </div>

)


window.modules["pluginList"] = PluginList
module.exports = PluginList
