let rtConfig = {
  get(obj,key){
    const res = [obj][key]
    track(obj,key)
    return typeof res=='object'&&res!=null ?reactive(res):res;
  },
  set(obj,key,val){
    obj[key] = val
    trigger(obj,key)
  }
}
let stack = []
let weakmap = new WeakMap()
function reactive(obj){
  return new Proxy(obj,rtConfig)
}
function track(obj,key){
  let effect = stack[stack.length - 1]
  if(effect){
    let depsMap = weakmap.get(obj)
    if(!depsMap){
        depsMap = new Map()
        weakmap.set(obj,depsMap)
    }
    let deps = depsMap.get(key)
    if(!deps){
        deps = new Set()
        depsMap.set(key,deps)
    }
    if(!deps.has(effect)){
        deps.add(effect)
        effect.deps.push(effect)
    }
  }
}
function trigger(obj,key){
  let depsMap = weakmap.get(obj)
  let computeds = new Set()
  let effects = new Set()
  if(key){    
    let deps = depsMap.get(key)
    deps.forEach(fn=>{
      if(fn.computed){
        computeds.add(fn)
      }else{
        effects.add(fn)
      }
    })
  }
  computeds.forEach(fn=>fn())
  effects.forEach(fn=>fn())
}

function effect(fn,op={}){
  let o = createEffect(fn,op)
  if(!o.lazy){
     o()
  }
  return o
}
function createEffect(fn,op){
  const effect = function(...args){
      return run(effect,fn,args)
  }
  effect.lazy = op.lazy
  effect.deps = []
  effect.computed = op.computed
  return effect
}
function run(effect,fn,args){
  if(stack.indexOf(effect)!==-1){
      try{
        stack.push(effect)
        return fn.apply(this,args)
      }finally{
        stack.pop()
      }
  }
}

function computed(fn){
  let o = effect(fn,{lazy:true,computed:true})
  return {
    runner:o,
    get value(){
      return o()
    }
  }
}