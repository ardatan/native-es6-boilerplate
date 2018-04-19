export function Component({ selector }){
    return function(target){
        customElements.define(selector, target);
        return target;
    }
}