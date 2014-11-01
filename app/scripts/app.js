var PluginList, React, mountNode;

window.modules = {};

React = window.React = require("react");

PluginList = require("./PluginList");

mountNode = document.getElementById("app");

client.models.Route.find({}, function(error, result) {
  console.log("result", result);
  return React.renderComponent(React.createElement(PluginList, null), mountNode);
});
