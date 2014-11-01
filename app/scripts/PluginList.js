var PluginList;

PluginList = React.createClass({
  getInitialState: function() {
    var plugins, that;
    that = this;
    plugins = [
      {
        url: "https://github.com/smlsunxie/cms-plugin-sample.git",
        name: "cms-plugin-sample"
      }, {
        url: "https://github.com/smlsunxie/cms-plugin-routeList.git",
        name: "cms-plugin-routeList"
      }, {
        url: "https://github.com/smlsunxie/cms-plugin-foot.git",
        name: "cms-plugin-foot"
      }
    ];
    return {
      plugins: plugins
    };
  },
  installPlugin: function(plugin) {
    return client.models.Route.action("cms-plugin-pluginList", "installPlugin", plugin, function(error, result) {
      return alert("install finish ~");
    });
  },
  render: function() {
    var initPluginList, that;
    that = this;
    initPluginList = function(plugin) {
      var installPlugin;
      installPlugin = that.installPlugin.bind(that, plugin);
      return React.createElement(React.DOM.tr, null, React.createElement(React.DOM.td, null, plugin.url), React.createElement(React.DOM.td, null, plugin.name), React.createElement(React.DOM.td, null, React.createElement(React.DOM.button, {
        "onClick": installPlugin
      }, "install")), React.createElement(React.DOM.td, null));
    };
    return React.createElement(React.DOM.div, {
      "className": "panel panel-default"
    }, React.createElement(React.DOM.div, {
      "className": "panel-heading"
    }, "route list"), React.createElement(React.DOM.table, {
      "className": "table"
    }, React.createElement(React.DOM.thead, null, React.createElement(React.DOM.tr, null, React.createElement(React.DOM.th, null, "plugin url"), React.createElement(React.DOM.th, null, "plugin name"), React.createElement(React.DOM.th, null, "install"), React.createElement(React.DOM.th, null, "remove"))), React.createElement(React.DOM.tbody, null, this.state.plugins.map(initPluginList))));
  }
});

window.modules["pluginList"] = PluginList;

module.exports = PluginList;
