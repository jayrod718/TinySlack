import { autoinject, bindable, bindingMode, customElement, TaskQueue } from "aurelia-framework";
import * as _ from "lodash";
import { Common } from "../common";
import ElementUtil from "./common/element-util";

/**
 * This is a dropdown
 */
@customElement("ce-dropdown")
@autoinject()
export class DropDown {
    public common: Common;
    public taskQueue: TaskQueue;

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public type: string = "radiolist";

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public item: any;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public items: any;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public displayAttribute: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public valueAttribute: string; // set this if the user wants a string
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabledAttribute: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public visibleAttribute: string;
    
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabled: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public pre: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public placeholder: string = "";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public warningMsg: string = "Warning";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public infoMsg: string = "";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isWarning: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public required: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public errorMsg: string = "Value required";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;

    @bindable public formName: string = "default";
    @bindable public isRadio: boolean = false;
    @bindable public changing: Function;
    @bindable public change: Function; // call via change.call="functionName"
    @bindable public validate: Function;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isOverrideInvalid: boolean = false;

    private _input: Element;

    private _activeMap: boolean[];
    private _item: any = null;
    private _areObjects: boolean = false;
    private _element: Element;
    private _validate: Function;
    private _formGroup: HTMLElement; // element ref
    private _clear: Function; // set in inheritor
    private _myValidator: Function; // set in inheritor
    private _emptyValue: any = null;  // will be null if objects, "" if string

    constructor(common: Common, taskQueue: TaskQueue) {
        this.common = common;
        this.taskQueue = taskQueue;

        this._validate = this.defaultValidate;
        // clear is called by hte
        this._clear = (onlyClearValidation: boolean) => {
            this.isValid = true;
            if (!onlyClearValidation) {
                this._item = this._emptyValue;
                this.item = this._emptyValue;
                this._activeMap = ElementUtil.activeMap(this.items, this._item);
                this.updateSelection();
            }
        }
        this._myValidator = () => {
            if (this.required && ElementUtil.isVisible(this._formGroup)) {
                this.isValid = this._validate({ item: this.item });
            }
            return this.isValid;
        };
    }

    public attached() {
        this.isValid = true;
        if (this.validate) { this._validate = this.validate; }
        ElementUtil.attached(this.common, this.formName, this.required, this._clear, this._myValidator);

        if (this.item != null) {
            this.itemChanged(this.item, null);
        }
    }

    public itemsChanged(newValue: any, oldValue: any) {
        this._areObjects = ElementUtil.areObjects(this.items);

        // if (newValue != null) {
        //     this.itemChanged(this.item, null);
        //         // get current object from selected display attribute;
        // }
        if (newValue != null && this.item != null) {
            // get current object from selected display attribute;
            this._activeMap = ElementUtil.activeMap(this.items, this._item);
            this.updateSelection();
        }
    }

    // this is fired before the item changes,
    // if the item is changed externally.
    public itemChanged(newValue: any, oldValue: any) {

        if (!this.items) {
            // we don't know if the item is an object or not yet....
            return;
        }

        let wasChanged = false;
        // if areStrings
        if (!this._areObjects) {
            if (this._item !== newValue) {
                this._item = newValue;
                wasChanged = true;
            }
        }
        // if objects
        else if (this._areObjects) {
            if (newValue == null || newValue === "") {
                if (this._item != null) {
                    this._item = null;
                    wasChanged = true;
                }
            }
            else {
                // Keep in mind that there may or may not be a valueAttribute, we could be selecting objects instead of a prop of an object.
                let selected = null;
                // Handle Strings and Numbers
                if (newValue.constructor === String || newValue.constructor === Number) {
                    // find by property because we're selecting an prop out of the object
                    selected = this.findItemByAttribute(newValue, this.valueAttribute);
                    if (!_.isEqual(selected, this._item)) {
                        this._item = selected;
                        wasChanged = true;
                    }
                }
                // Handle Objects (if there is no valueAttribute)
                else {
                    if (!_.isEqual(newValue, this._item)) {
                        this._item = newValue;
                        wasChanged = true;
                    }
                }

            }
        }

        if (wasChanged) {
            this._activeMap = ElementUtil.activeMap(this.items, this._item);
            this.updateSelection();
        }

        if (this.required && ElementUtil.isVisible(this._formGroup)) {
            this.isValid = this._validate({ item: this.item });  // todo: wrong place
        }
    }

    public updateSelection() {
        this.taskQueue.queueTask(() => {
            if (this._formGroup) {
                if (this.type === "dropdown") {
                    let elems = Array.from(this._formGroup.getElementsByTagName("option"));
                    ElementUtil.setOptionFromActiveMap(elems, this._activeMap);
                }
                else {
                    ElementUtil.removeAllActiveChildren(this._formGroup);
                    let elems = Array.from(this._formGroup.getElementsByClassName("btn"));
                    ElementUtil.setActiveFromActiveMap(elems, this._activeMap);
                }
            }
        });
    }

    public _itemChanged() {
        let wasChanged = false;

        // if areStrings
        if (!this._areObjects) {
            if (this.item !== this._item) {
                this.item = this._item;
                wasChanged = true;
            }
        }
        // if objects
        if (this._areObjects) {
            // if there is a valueAttribute, then this.item needs to be a string
            if (this.valueAttribute) {
                if (this.item !== this._item[this.valueAttribute]) {
                    this.item = this._item[this.valueAttribute];
                    wasChanged = true;
                }
            }
            // if there is not a valueAttribute, then this.item needs to be an OBJECT
            if (!this.valueAttribute) {
                if (this.item !== this._item) {
                    this.item = this._item;
                    wasChanged = true;
                }
            }
        }
        if (wasChanged) {
            this._activeMap = ElementUtil.activeMap(this.items, this._item);
            this.updateSelection();
        }
    }

    public defaultValidate(args): boolean {
        // we are only validating that there IS a value
        // remember this may be an object or a string
        return args.item !== "" && args.item != null;
    }

    public findItemByAttribute(attrValue: any, prop: string) {
        let selected: any = null;

        if (attrValue.constructor !== String
            && attrValue.constructor !== Number) {
            attrValue = attrValue[prop];
        }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i][prop] === attrValue && selected == null) {
                selected = this.items[i];
            }
        }
        return selected;
    }

    // this is fired before item changes.
    // and only if the item changes from THIS control, not from external source
    public _changed(ev: MouseEvent, index) {
        this._itemChanged();

        if (this.changing) { this.changing({
            event: ev,
            item: this.item,
            index: index
        }); }
        // Todo, use this everywhere.
        // this will call change after the values of bindables are updated
        this.taskQueue.queueMicroTask(() => {
            if (this.change) { this.change(); }
        });
        ElementUtil.removeAllActiveChildren(this._formGroup);
        (<HTMLElement>ev.target).parentElement.classList.add("active");
        return true;
    }

    public detached() {
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }

}
