import {validateMixin} from "./validate.js"
import {extendMixin} from "./extend.js"
import {pluginMixin} from "./plugin.js"
import proxyAsyncValidator from "./proxy.js"


function AsyncValidator(opt){
    if(!new.target){
        return new AsyncValidator(opt);
    }
    this._init(opt);
}

AsyncValidator.options = {}

let proxy = proxyAsyncValidator(AsyncValidator);

validateMixin(AsyncValidator);
extendMixin(proxy);
pluginMixin(proxy);

import {transform as typeTransform,plugin as typePlugin} from "./plugins/type.js"
proxy.plugin('type',typeTransform,typePlugin);

console.log(proxy.options)


export default proxy