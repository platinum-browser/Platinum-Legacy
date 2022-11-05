// ripped out all the old dynamicux code and replaced it with better code

// For reference (🤮):
// function createHook(elemID, hookName) {
//     hookName = [
//         hookData = document.querySelector('#' + elemID)
//     ]
// }

// function getHookData(hookName) {
//     try {
//         var currentHookData = hookName.hookData;
//     }
//     catch(err) {
//         console.log("ERR: " + err.message)
//     }
// }

export default class Hook {

    static instances = [];

    constructor(hookName) {
        this.elemID = null; // Expected to use .attach() to set & update it
        this.name = hookName;
        this.reference = null;
        this.uuid = require()
        Hook.instances.push(this);
        this._instanceIndex = Hook.instances.indexOf(this);
        this._updateInstances();
    }

    attach(el) {
        const el = document.querySelector(el)
        this.reference = el
        this._updateInstance()
    }



    _updateInstance() {
        Hook.instances[this._instanceIndex] = this;
        this._instanceIndex = Hook.instances.indexOf(this);
    }

    get getData() {
        return this.data
    }

    destroy() {
        Hook.instances.splice(this._instanceIndex, 1);
    }

}

export function createHook(elemID, hookName) { // for backwards compatibility for now. will be removed in the future
    console.warn(`Please use the new OpenUX APIs instead of the DynamicUX APIs.
They're more stable, more secure, and more powerful.`)
    const _hook = new Hook()
    _hook.attach(`#${elemID}[dux-attach]`)
    return _hook
}

export function getHookData(hookName) {
// todo
}

function hookExample() {
    const demoP = new Hook()
}