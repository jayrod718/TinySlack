import { autoinject, bindable, bindingMode, customElement, TaskQueue} from "aurelia-framework";
import * as _ from "lodash";
import { Common } from "../common";
import ElementUtil from "./common/element-util";

@customElement("ce-modal")
@autoinject()
export class Modal {
    public common: Common;

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public item: any;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public headerText: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public buttonText: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public altButtonText: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public icon: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public blnIsErrorModal: boolean = false;

    @bindable public callback: Function;
    @bindable public altCallback: Function;
    
    constructor(common: Common) {
        this.common = common;
    }

    _callback() {
        if(this.callback) { this.callback(); }
    }
    _altCallback() {
        if(this.altCallback) { this.altCallback(); }
    }
}