export const StorageProxy = (storage: Storage) => new Proxy<Storage>(localStorage, {
    get(target, key: string){
        return target[key] && JSON.parse(target[key]);
    },
    set(target, key: string, value){
        target[key] = JSON.stringify(value);
        return true;
    }
});

export const localStorageProxy = StorageProxy(localStorage);
export const sessionStorageProxy = StorageProxy(sessionStorage);