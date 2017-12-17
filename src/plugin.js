function pluginMixin(AsyncValidator){
    AsyncValidator.plugin = function(type,transform,pluginFn,...args){
        if(AsyncValidator.options[type]){
            console.error(`${type} 已经被占用`);
            return;
        }

        if(typeof transform === 'function'){
            AsyncValidator.options[type] = transform;
        }


        
        if(typeof pluginFn === 'function'){
            args.unshift(this);
            pluginFn(...args);
        }
    }
}

export {
    pluginMixin,
}