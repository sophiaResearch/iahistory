((BookComponents) => {
  const registry = new Map()
  
  BookComponents.Registry = {
    define(name, factoryFunction){ registry.set(name,factoryFunction) },
    get(name){ return registry.get(name) }
  } 

})(window.BookComponents = window.BookComponents || {});
