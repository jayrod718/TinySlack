
import { autoinject, bindable, bindingMode, customElement, TaskQueue } from "aurelia-framework";
import { Data } from "../../resources/data";
import { Common } from "../common";
import ElementUtil from "./common/element-util";

// import {customElement, bindable, bindingMode, autoinject} from 'aurelia-framework';
// import { BaseElement } from "./a-base";
/*
  This is a typeahead.
  What does this element do?
  1.  Provide an input.
  2.  Provide a bindable selected object/string for holding the selected item.
  3.  When a user types, a data set is searched for that search text.   If found, the results will display in a drop down list with matched text highlighted.
  4.  If a user clears the text box, then the selected item should clear.
  TODO: Expand to support a HTTP search
*/
@customElement("ce-typeahead")
@autoinject()
export class ATypeahead {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public selection: Function;

    /** @param selected - will be set to the selected item (object or string) */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public selected: any;
    /** @param change.delegate - optional callback when item selected */

    /** @param source - source for the search, should be Array of object or string */
    @bindable public source: Array<any>;
    /** @param selectionProperty - sounce for the input string after selected */
    @bindable public selectionProperty: string;

    // Other options
    // @bindable public hasOther: string;
    @bindable public hasOther: boolean;
    @bindable public hasOtherText: string = "Company not found, use this name";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public hasOtherSelected: boolean;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public hasOtherValue: string = null;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public hasOtherLabel: string = null;

    /**
     * @param filter should return a bool, it is run once per item:
     * function(obj, query) {
     *   if(obj.prop.indexOf(query) > -1 ) return true;
     *   return false;
     * }
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public filter: Function;


    /**
     * Select should be an object:
     * { 
     * fields: "Id, Name"
     * extended: "(Select SubQuery)" - optional
     * object: "Account__c"
     * searchField: ["Id", "Name"]
     * limit: 15
     * }
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public select;
    
    

    /** @param template - takes item obj or string, should return html for dropdown list item */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public template: Function;

    @bindable public btnClass: string = "btn-secondary"; // or btn-primary

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabled: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public pre: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public placeholder: string = "Type to search";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public warningMsg: string = "Warning";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isWarning: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public required: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public errorMsg: string = "This field is required";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isOverrideInvalid: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public selectedrecordicon: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public defaultresults: Array<any> = [];
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showInlineHelp: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showInlineHelpLink: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpMsg: string = "Bind Help Text HERE";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpMsgAfterLink: string = ".";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpLinkText: string = "More";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpLink: string = "http://www.google.com";
    
    @bindable public formName: string = "default";
    @bindable public changing: Function;
    @bindable public change: Function;
    @bindable public validate: Function;
    @bindable public addNewCallback: Function;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public addingOther: boolean;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isVisible: Function;
 
    public common: Common;
    public data: Data;
    public taskQueue: TaskQueue;
    private _input: any; // ref
    private _isSelected: boolean = false;
    private _selection: any = null;
    private testList: string[] = ["you", "should", "bind", "something", "to", "source"];
    private isOpen: boolean;
    private query: string = "";
    private results: Array<any> = [];
    private _maxResults: number = 5;
    private _validate: Function;
    private _clear: Function;
    private _myValidator: Function;
    private _formGroup: any;

    constructor(common: Common, taskQueue: TaskQueue, data: Data) {
        this.common = common;
        this.taskQueue = taskQueue;
        this.data = data;

        this._validate = this.defaultValidate;
        // clear is called by the
        this._clear = (onlyClearValidation: boolean) => {
            if (this.addingOther) { this.addingOther = false; }
            this.isValid = true;
            if (!onlyClearValidation) {
                this.selected = null;
                // this._blockItemChanged = true;
            }
        };

        this._myValidator = () => {
            if (this.required && ElementUtil.isVisible(this._formGroup)) {
                this.isValid = this._validate({ item: this.selected });
            }
            return this.isValid;
        };
    }

    public addNew() {
        if (this.addNewCallback) {
            this.addNewCallback();
        }
    }

    public defaultSelection() {
        let selectionPropertySplit: Array<any> = this.selectionProperty ? this.selectionProperty.split(".") : [this.selectionProperty];
        if(selectionPropertySplit.length > 1) {
            return this.selectionProperty ? this.selected[selectionPropertySplit[0]][selectionPropertySplit[1]] : this.parseForString(this.selected);
        } else {
            return this.selectionProperty ? this.selected[this.selectionProperty] : this.parseForString(this.selected);
        }
    }

    public attached() {
        ElementUtil.attached(this.common, this.formName, this.required, this._clear, this._myValidator);

        /** On attached, we will have access to the bindabled properties if we are if.bind on the element so it is created and destroyed */
        if (!this.template) {
            this.template = this.defaultTemplate;
        }

        if (!this.source) {
            this.source = this.testList;
        }

        if (!this.selection) {
            this.selection = this.defaultSelection;
        }

        if (this.selected) {
            this.selectedChanged(this.selected, null);
        }
        if (this.hasOtherSelected) {
            this.selectingOther();
        }
    }

    public defaultValidate(args) {
        // we are only validating that there is an item, and it is longer than ""
        return args.item != null;
    }

    public clearSelection() {
        if (this.addingOther) { this.addingOther = false; }
        this._isSelected = false;
        this._selection = "";
        this.selected = null;
        this.clearOther();
        this._changed("Cleared");
    }

    public clearOther() {
        this.hasOtherSelected = false;
        this.hasOtherValue = null;
    }

    public _queryChanged(ev) {
        // dude your selection is cleared now.

        if (this.selected) {
            this.selected = null;
        }

        if (this.amISearching()) {
            if (this.select) {
                this.queryResults(this.select, this.query);
            }
            else {
                this.queryCallback(this.defaultFilter(this.query));
            }
        } else {
            this.isOpen = false;
            if (this.required && ElementUtil.isVisible(this._formGroup)) {
                this.isValid = this._validate({ item: this.selected });
            }
        }
    }

    /**
     * Select should be an object:
     * { 
     * fields: "Id, Name"
     * extended: "(Select SubQuery)" - optional
     * object: "Account__c"
     * searchField: ["Id", "Name"]
     * limit: 15
     * }
     */
    public queryResults(select: any, query) {
        //Build query
        let sel: string = "SELECT " + select.fields;
        if(select.extended) { sel += " " + select.extended; }
        sel += " FROM " + select.object;

        let terms: string[] = query.split(" ");
        for(let k = 0; k < select.searchField.length; k++) {
            sel += k == 0 ? " WHERE ((" : " OR (";

            for(let i = 0; i < terms.length; i++) {
                sel += i == 0 ? "" : " AND ";
                sel += select.searchField[k] + " LIKE '%" + terms[i] + "%'";
            }

            sel += k+1 == select.searchField.length ? "))" : ")";
        }

        if(select.additionalWhere) { sel += select.additionalWhere;  }

        if(select.limit) { sel += " LIMIT " + select.limit; }

        this.data.sforceQuery(sel)
        .then((result: any) => {
            //Salesforce is fucking brilliant, if this only retrieves 1 record, they don't make it any array.
            if(result.records) {
                if(result.records.length){
                    this.queryCallback(result.records);
                }            
                else { //if not, make it an array... I mean its called recordS?
                    this.queryCallback([result.records]);
                }            
            }
            else{
                this.queryCallback([]);
            }
        }).catch(this.common.errorHandler);
    }
    public selectedChanged(newValue: any, oldValue: any) {
        if (newValue !== oldValue) {
            if (newValue == null) {
                this.clearSelection();
            } else {
                this.query = "";  // clear query
                this._isSelected = true;

                if (this.selection) { this._selection = this.selection(); }

                if (this.required && ElementUtil.isVisible(this._formGroup)) {
                    this.isValid = this._validate({ item: this.selected });
                }
            }
        }
    }

    public _changed(ev) {
        if (this.changing) { this.changing({
            event: ev,
            item: this.selected,
        }); }
        this.taskQueue.queueMicroTask(() => {
            if (this.change) { this.change(); }
        });
    }

    public queryCallback(res) {
        this.clearArray(this.results); // clear array
        let regEx = new RegExp("(" + this.query + ")(?!([^<]+)?>)", "gi");  // compile once for all the loop.
        for (let i = 0; i < res.length; i++) {
            this.results.push({
                // html: this.highlightVisibleMatches(this.template(res[i], i), regEx),
                html: this.template(res[i], i),
                item: res[i],
            });
        }

        if (this.hasOther || res.length > 0) {
            this.isOpen = true;
        }
    }
    public show() { // on button click
        this._input.focus();
    }

    public _focusFunc(ev) {
        if (this.amISearching() && this.results && (this.hasOther || this.results.length > 0)) {
            this.isOpen = true;
        } else if(!this.amISearching() && this.defaultresults && this.defaultresults.length > 0) {
            // Set the default list items to the Bound default available results
            this.queryCallback(this.defaultresults);
        }
    }

    public _blurFunc(ev) {
        this.isOpen = false;
    }

    public selectingFunc(ev, res) {
        const areDifferent = (this.selected !== res.item);
        this.selected = res.item;
        // Check if the Selection Property is a level down
        let selectionPropertySplit: Array<any> = this.selectionProperty ? this.selectionProperty.split(".") : [this.selectionProperty];
        if(selectionPropertySplit.length > 1) {
            this.query = this.selectionProperty ? this.selected[selectionPropertySplit[0]][selectionPropertySplit[1]] : this.parseForString(res.html);
        } else {
            this.query = this.selectionProperty ? this.selected[this.selectionProperty] : this.parseForString(res.html);
        }
        this._changed("Selected");
        // go ahead and filter to this selection only... because reasons.
        this.queryCallback(this.defaultFilter(this.query));

        if (this.required && ElementUtil.isVisible(this._formGroup) && areDifferent) {
            this.isValid = this._validate({ item: this.selected });
        }
        return true;
    }

    public selectingOther() {
        this.addingOther = true;
        if (this.query != "") {
            this.hasOtherValue = this.query;
        }

        this.query = "";  // clear query
        this._isSelected = true;
        this.isOpen = false;
        this.hasOtherSelected = true;
    }

    // default query is just a string match.
    public defaultFilter(query) {
        // while filter might be prettier, we need to limit our matches for speed.
        let res: Array<any> = [];

        if (this.source) {
            for (let i = 0; i < this.source.length; i++) {
                let obj = this.source[i];
                // if there is a custom filter 
                if (this.filter) {
                    if (this.filter(obj, query)) {
                        res.push(obj);
                    }
                } else {
                    // we shall run our own filter
                    if (obj.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                        res.push(obj);
                    }
                }
                if (res.length > this._maxResults) {
                    break;
                }
            }
        }
        return res;
    }

    public highlightVisibleMatches(html, regEx) {
        html = html.replace(regEx, "<span class=\"tt-highlight\">$1</span>");
        return html;
    }

    // default html for a result.
    public defaultTemplate(data,i) {
        // assuming a list of strings is being searched.
        // return "<div class=\"tt-suggestion tt-selectable\"><span class=\"tt-content\">" + data + "</span></div>";
        return "<div id=\"listbox-option-unique-id-" + i + "\" class=\"slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta\" role=\"option\"><span class=\"slds-media__body\"><span class=\"slds-listbox__option-text slds-listbox__option-text_entity\">" + data.Name + "</span></span></div>"
    }

    public parseForString(html) {
        return html.replace(/<(.*?)>/g, "");
    }

    public amISearching() {
        return this.query.trim().length > 0;
    }

    // Clears all items from an array
    public clearArray(arr) {
        for (let i = arr.length; i > 0; i--) {
            arr.pop();
        }
    }

    public detached() {
        this.query = "";
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }

}
