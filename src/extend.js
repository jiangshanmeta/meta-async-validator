import proxyAsyncValidator from "./proxy.js"

function extendMixin(AsyncValidator){
    AsyncValidator.extend = function(){
        const parent = this;
        let child = function(opt){
            if(!new.target){
                return new AsyncValidator(opt);
            }
            this._init(opt);
        }
        // 继承静态属性和方法
        Object.setPrototypeOf(child,parent);
        child.options = Object.create(parent.options)
        // 继承原型属性和方法
        child.prototype = Object.create(parent.prototype);
        Object.defineProperty(child.prototype,'constructor',{
            value:child
        })

        return proxyAsyncValidator(child);
    }
}

export {
    extendMixin,
}