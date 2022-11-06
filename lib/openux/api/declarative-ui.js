class InstancesManager {
    static instances = [];

    static removeInstance(index) {
        InstancesManager.instances.splice(index, 1)
    }

}


class DUIElement {

    constructor(...attributes) {
        this.elementType = 'dui-root';
        this.attributes = attributes || [];
        this._isLocked = false;
        this._updateData()

        //this.reference = 
    }

    _updateData() {
        if (!this._isLocked) {
            if (!InstancesManager.instances.includes(this)) {
                InstancesManager.instances.push(this)
                this._emInstancesIndex = InstancesManager.instances.indexOf(this)
            } else {
                InstancesManager.instances[this._emInstancesIndex] = this
            }
        } else {
            throw TypeError('Element is locked')
        }
    }

    _createReference() {
        if (this.elementType === 'dui-root') {
            return document.createElement('div')
        }
    }

    lock() {
        if (!this._isLocked) this._isLocked = true
    }

    _transformAttributes() {
        if (this.attributes === []) {
            // easier and less computationally expensive
            return ``
        } else {
            let str;
            for (let attr in this.attributes) {
                str.concat(`${attr.name}=${attr.value}`)
            }
        }
    }

    append(where) {
        let el = document.createElement(this.elementType)
        _applyAttributes(el, this._transformAttributes())
        where.appendChild(el)
    }

}

class DUIAttribute {

    constructor(name, value) {
        this.name = name
        this.value = value
        this._isLocked = false
    }

    lock() {
        this._isLocked = true
    }

}