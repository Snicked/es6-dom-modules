const DomModules = function(basePath, _config) {

  const config = Object.assign({
    "selector" : "[data-module]",
    "fileSuffix" : ".js"
  }, _config);

  const modules = document.querySelectorAll(config.selector);
  
  modules.forEach((elem) => {
    const moduleName = elem.dataset.module;
    import(basePath + moduleName+ config.fileSuffix).then((Module) => {
      new Module.default(elem);
    })
  });
}; 

export default DomModules;