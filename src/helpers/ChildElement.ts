export function ChildElement(selector: string) {
    return function (target: HTMLElement, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor = {
            get() {
                return this.shadowRoot.querySelector(selector) || this.querySelector(selector);
            }
        };
        return descriptor;
    }
}