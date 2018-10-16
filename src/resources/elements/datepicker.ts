import { autoinject, bindable, bindingMode, customElement, TaskQueue} from "aurelia-framework";
import * as _ from "lodash";
import * as moment from "moment";
import { Common } from "../common";
import ElementUtil from "./common/element-util";

import "pickadate";
import "pickadate/date";

@customElement("ce-datepicker")
@autoinject()
export class CEDatepicker {
    public common: Common;
    public taskQueue: TaskQueue;

     /** datepicker options */
    public _options: Pickadate.DateOptions;

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public date: any;
    @bindable public iconPlacement: string = "post"; // or "pre"
    @bindable public btnClass: string = "btn-secondary"; // or btn-primary

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabled: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public pre: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public placeholder: string = "Select Date";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public warningMsg: string = "Warning";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isWarning: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public required: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public errorMsg: string = "Value required";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isOverrideInvalid: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public options: any = {};
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showInlineHelp: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showInlineHelpLink: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpMsg: string = "Bind Help Text HERE";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpMsgAfterLink: string = ".";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpLinkText: string = "More";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpLink: string = "http://www.google.com";
    
    @bindable public formName: string = "default";
    @bindable public changing: Function;
    @bindable public change: Function; // call via change.call="functionName"
    @bindable public validate: Function;

    /** _date Internal date field */
    private _date: Date;

    private datevalue: string;
    private _datevalue: string;

    private _dp: any;
    private _input: Element;

    private _validate: Function;
    private _formGroup: any; // element ref
    private _clear: Function; // set in inheritor
    private _myValidator: Function; // set in inheritor
    private _emptyValue: any = null;  // will be null if objects, "" if string
    private _isOpen: boolean = false;

    constructor(common: Common, taskQueue: TaskQueue) {
        this.common = common;
        this.taskQueue = taskQueue;

        this._validate = this.defaultValidate;

        this._options = {};
        this._options.format = "mm/dd/yyyy";
        this._options.editable = !this.common.mobilecheck();
        this._options.selectMonths = true;
        this._options.selectYears = 80;
        this._options.editable = true;
        // this._options.containerHidden = "#dtpickerdialog";
        this._options.container = "#dtpickerdialog";
        //this._options.max = new Date();

        this._clear = (onlyClearValidation: boolean) => {
            this.isValid = true;
            if (!onlyClearValidation) {
                this.date = this._emptyValue;
                this._datevalue = '';
             }
        };
        this._myValidator = () => {
            if (this.required && ElementUtil.isVisible(this._formGroup)) {
                this.isValid =  this._validate({ date: this.date }); }
            return this.isValid; };
    }

    public attached() {
        this.isValid = true;
        if (this.validate) { this._validate = this.validate; }
        ElementUtil.attached(this.common, this.formName, this.required, this._clear, this._myValidator);

        for(var p in this.options){
            this._options[p] = this.options[p];
        }
        // initialize pickadate
        if(this._input) {
            let _dp = jQuery(this._input).pickadate(this._options);
            this._dp = _dp.pickadate("picker");
            this._dp.on("set", (arg: any) => { this.dp_set(arg); } );
            this._dp.on("open", (arg: any) => { this.dp_open(); } );
            this._dp.on("close", (arg: any) => { this.dp_closed(); } );

            // the dateChanged may be fired before attached, therefore we need to set the datepicker here if it was already set
            if (this.date) {
                this._dp.set("select", this.date);
            }
        }
        else{
            this.taskQueue.queueMicroTask(() => {
                let _dp = jQuery(this._input).pickadate(this._options);
                this._dp = _dp.pickadate("picker");
                this._dp.on("set", (arg: any) => { this.dp_set(arg); } );
                this._dp.on("open", (arg: any) => { this.dp_open(); } );
                this._dp.on("close", (arg: any) => { this.dp_closed(); } );
    
                // the dateChanged may be fired before attached, therefore we need to set the datepicker here if it was already set
                if (this.date) {
                    this._dp.set("select", this.date);
                }
            });
        }
    }

    public show() { // For show button only
        this._dp.open();
    }

    /**
     * Callback when the datepicker is opened
     */
    public dp_open() {
        this._isOpen = true;
    }

    /**
     * Callback when the datepicker is opened
     */
    public dp_closed() {
        this._isOpen = false;
    }

    /**
     * Callback when the datepicker is set
     * @param arg {select: date = Date.valueOf or clear: null }
     */
    public dp_set(arg: any) {
        // console.log(arg);
        // arg.select = date
        // arg.clear = null

        if (arg.clear) {
            this._date = null;
            if (this.date != null) {
                this.date = this._date;

                if (this.required && ElementUtil.isVisible(this._formGroup)) {
                    this.isValid = this._validate({ date: this.date });
                }
                if (this.changing) { this.changing({date: this.date}); }

                this.taskQueue.queueMicroTask(() => {
                    if (this.change) { this.change(); }
                });
            }
        }
        else if (arg.select) {
            this._date = moment(arg.select).toDate();
            if (this.date == null || this.date.valueOf() !== this._date.valueOf()) {
                this.date = this._date;

                if (this.required && ElementUtil.isVisible(this._formGroup)) {
                    this.isValid = this._validate({ date: this.date });
                }
                if (this.changing) { this.changing({date: this.date}); }

                this.taskQueue.queueMicroTask(() => {
                    if (this.change) { this.change(); }
                });
            }
        }

    }

    // this is fired before the date changes,
    // and if the date is changed externally or internally.
    public dateChanged(newValue: any, oldValue: any) {

        if (this.date == null && this._date != null) {
            if (this._dp) {
                this._dp.clear();
            }
        }
        else if(this.date != null && this.date.constructor != Date) {
            console.log("Critical Data Error: Trying to set Date to string.")
        }
        else if (this.date != null && this._date == null
                 || (this.date != null && this._date != null
                 && this.date.valueOf() !== this._date.valueOf())) {
            if (this._dp) {
                this._dp.set("select", this.date);
            }
            if (this.required && ElementUtil.isVisible(this._formGroup)) {
                this.isValid = this._validate({ date: this.date });
            }
        }
        else if (this.date == null) {
            this._datevalue = '';
        }

    }

    // this is fired AFTER the date changes,
    // and only if the date changes from THIS control, not from external source
    public _changed(ev, index) {
        if (this.changing) { this.changing({
            date: this.date,
            event: ev});
        }

        this.taskQueue.queueMicroTask(() => {
            if (this.change) { this.change(); }
        });
        if (this.required && ElementUtil.isVisible(this._formGroup)) {
            this.isValid = this._validate({ date: this.date });
        }
        return true;
    }

    public defaultValidate(args): boolean {
        // we are only validating that there is an date, and it is longer than ""
        return args.date != null && args.date !== "";
    }

    public detached() {
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }
    public _blurFunc(ev) {
        // Set Changed on Blur
        if (this._datevalue !== this.datevalue) {
            this.datevalue = this._datevalue;
            const m = moment(this._datevalue, "MM-DD-YYYY");
            if (m !== null && m.isValid()) {
                this._date = m.toDate();
                this._dp.set("select", m.toDate());
            }
        }
        if (!this._datevalue && !ev.target.value) {
            this._clear();
        }
        // if (this.required && ElementUtil.isVisible(this._formGroup)) {
        //     this.isValid = this._validate({ date: this.date });
        // }
    }
}
