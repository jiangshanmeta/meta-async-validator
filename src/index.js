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

let proxy = proxyAsyncValidator(AsyncValidator);

validateMixin(AsyncValidator)
extendMixin(proxy)
pluginMixin(proxy)
export default proxy