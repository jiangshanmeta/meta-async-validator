function proxyAsyncValidator(asyncValidator,parent){
    const staticPropertyMethodSet = new Set();
    if(parent){
        for(let item of parent.proxy){
            console.log(item)
            staticPropertyMethodSet.add(item)
        }
    }

    staticPropertyMethodSet.add('proxy');

    return new Proxy(asyncValidator,{
        set(target,key,value,receiver){
            console.log(key);
            if(staticPropertyMethodSet.has(key)){
                console.error(`已经有静态属性/方法${key}`);
                return;
            }
            staticPropertyMethodSet.add(key);
            
            return Reflect.set(target,key,value,receiver)
        },
        get(target,key){
            if(key === 'proxy'){
                return staticPropertyMethodSet;
            }
            return Reflect.get(target,key);
        }
    })
}

export default proxyAsyncValidator