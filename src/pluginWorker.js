function checkPlugin(namespace) {
  // TODO: implement plugin scanning
}

var loaded_plugins = [];
let plugins = require("plugins/plugins.conf.js").plugins;

function injectAll() {
  // add a script tag to html to load every script in plugins variable
  for (let i = 0; i < plugins.length; i++) {
    injectPlugin(plugins[i]);
  }
}

function injectPlugin(namespace) {
  try {
    let script = document.createElement("script");
    script.src = "../plugins/" + namespace + "/plugin.js";
    document.body.appendChild(script);
    loaded_plugins.push(namespace);

    console.log("DEBUG: Plugin " + namespace + " has been injected.");
  } catch (e) {
    console.error(`DEBUG: Error while loading plugin ${namespace}`);
  }
}

function executeAll() {}

if (loadPlugins == "true") {
  inject();
  execute();
  console.log("DEBUG: Plugins are enabled.");
}
