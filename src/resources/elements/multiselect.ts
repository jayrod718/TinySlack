import { Common } from "../common";
import ElementUtil from "./common/element-util";
import {autoinject, bindable, bindingMode, customElement, ObserverLocator, TaskQueue} from "aurelia-framework";

/*
* This is a checkbox list
*/

@customElement("ce-multiselect")
@autoinject()
export class CEMultiselect {
    public common: Common;
    public taskQueue: TaskQueue;
    public observerLocator: ObserverLocator;


    /** @param */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public type: string = "";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public items: Array<any>;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public selectedItems: Array<any>;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public displayAttribute: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public valueAttribute: string;

    // default options for all elements, must be set here, because base class cant declare bindables
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabled: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public pre: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public placeholder: string = "";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public warningMsg: string = "Warning";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isWarning: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public required: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public errorMsg: string = "Value required";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;

    @bindable public formName: string = "default";
    @bindable public changing: Function;
    @bindable public change: Function;
    @bindable public validate: Function;

    private _emptyValue: any = [];
    private _charLimitForStacked: Number = 42;
    private _charLimitForStackedLongText: Number = 120;
    private _isStackedClass: boolean = false;
    private _isStackedLongText: boolean = false;

    private _areObjects: boolean = false;
    private _activeMap: boolean[];
    private _arrayObserver: any;
    private _validate: Function;
    private _formGroup: HTMLElement; // element ref
    private _clear: Function; // set in inheritor
    private _myValidator: Function; // set in inheritor

    constructor(observerLocator: ObserverLocator, common: Common, taskQueue: TaskQueue) {
        this.common = common;
        this.taskQueue = taskQueue;
        this.observerLocator = observerLocator;

        this._validate = this.defaultValidate;
        // clear is called by the 
        this._clear = (onlyClearValidation: boolean) => {
            this.isValid = true;
            if (!onlyClearValidation) {
                this.selectedItems.splice(0, this.selectedItems.length);
                this._activeMap = ElementUtil.activeMap(this.items, this.selectedItems);
                this.updateSelection();
            }
        };
        this._myValidator = () => {
                if (this.required && ElementUtil.isVisible(this._formGroup)) {
                    this.isValid =  this._validate({ items: this.selectedItems });
                }
                return this.isValid; };
    }

    public attached() {
        this.isValid = true;
        if (this.validate) { this._validate = this.validate; }
        ElementUtil.attached(this.common, this.formName, this.required, this._clear, this._myValidator);

        if (this.selectedItems) {
            this.selectedItemsChanged(this.selectedItems, null);
        }
    }

    public itemsChanged(newValue: any, oldValue: any) {
        this._areObjects = ElementUtil.areObjects(this.items);
        //ElementUtil.checkMaxChars(this.items, this._areObjects, this.displayAttribute);
        if (newValue != null && this.selectedItems != null && this.selectedItems.length) {
                // get current object from selected display attribute;
                this._activeMap = ElementUtil.activeMap(this.items, this.selectedItems);
                this.updateSelection();
        }
    }

    public defaultValidate(args) {
        // we are only validating that there IS ONE value
        return args.items != null && args.items.length > 0;
    }

    public selectedItemsChanged(newValue: any, oldValue: any) {
        // fired when array actually changes, this means the ARRAY WAS REPLACED
        // We need to resubscribe.
        this._arrayObserver = this.observerLocator.getArrayObserver(this.selectedItems).subscribe(() => this.selectedItemsHasChanged());
        this.selectedItemsHasChanged();
    }

    public selectedItemsHasChanged() {
        // we dont want to validate stuff before stuff is loaded        
        this.remapActiveMap();

        if (this.required && ElementUtil.isVisible(this._formGroup) ) { // && this._selectedItems != this.selectedItems ) {
            this.isValid = this._validate({ items: this.selectedItems });
        }
    }
    public updateSelection() {
        this.taskQueue.queueTask(() => {
            if (this._formGroup) {
                let elems = Array.from(this._formGroup.getElementsByClassName("btn"));
                ElementUtil.setActiveFromActiveMap(elems, this._activeMap);
            }
        });
    }
    // this is fired AFTER the item changes, 
    // and only if the item changes from THIS control, not from external source
    public _changed(ev: MouseEvent, index) {

        // fix the active/not active class based on value, 
        // note that this is initially set via common.isActive but that only executes once
        // this._dirtyActiveTrigger = !this._dirtyActiveTrigger;
        this.remapActiveMap();
        let args = {
            event: ev,
            items: this.selectedItems,
            index: index,
        };
        if (this.changing) { this.changing(args); }

        this.taskQueue.queueMicroTask(() => {
            if (this.change) { this.change(); }
        });
        return true;
    }

    public detached() {
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }

    // wtf is this you might ask.
    // see you may have an array, and that array may changed
    // that array might have other things bound to it...
    // this will ensure to rebind the active variable when the selectedItems array is modified
    private remapActiveMap() {
        let newMap: boolean[] = [];
        this.items.forEach((obj) => {
            let val = false;
            this.selectedItems.forEach((s) => {
                if (!val) {
                    if (this._areObjects ) {
                        // DO NOT CHANGE THESE TO ===   "1" != 1
                        if (this.valueAttribute && s == obj[this.valueAttribute]) { val = true; }
                        else if (!val && s == obj) { val = true; }
                    }
                    else if (s === obj) {
                        val = true;
                    }
                }
            });
            newMap.push(val);
        });
        this._activeMap = newMap;
    }
}
