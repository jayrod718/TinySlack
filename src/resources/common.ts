import { inject, LogManager, TaskQueue } from "aurelia-framework";
import { CustomError } from "../classes/error";
import {Data} from "./data";

@inject(TaskQueue, Data)
export class Common {

    public taskQueue: TaskQueue;
    public data: Data;
    public globalInputClearFunctions: Object = {};
    public globalValidationFunctions: Object = {};

    constructor(private _taskQ: TaskQueue, private _data: Data) {
        this.taskQueue = _taskQ;
        this.data = _data;
    }

    /**
     * All a- elements wire to this function for being cleared without calling validation.
     */
    public clearInputs(formName, clearOnlyValidation = null) { // string or null
        if (clearOnlyValidation == null) { clearOnlyValidation = false; }
        if (!formName) { formName = "default"; }
        // if you passed a form name, sweet, we'll clear those functions
        // if you didn't pass a form name, we'll reset default form
        if (this.globalInputClearFunctions[formName]) {
            this.globalInputClearFunctions[formName].forEach((f) => { f(clearOnlyValidation); });
        }
    }
    /**
     * All a- elements wire to this function for being validated.
     */
    public validateInputs(formName: string): boolean { // string or null
        if (!formName) { formName = "default"; }
        let isValid = true;
        // if you passed a form name, sweet, we'll check those functions
        // if you didn't pass a form name, we'll check default form
        if (this.globalValidationFunctions[formName]) {
            this.globalValidationFunctions[formName].forEach((f) => {
                if (!f()) {
                    isValid = false;
                }
            });
        }

        if (!isValid) {
            this.taskQueue.queueMicroTask(() => {
                const list = document.getElementsByClassName("has-danger");
                if (list.length) {
                    scrollTo(0, (<HTMLElement>list[0]).offsetTop - 60);
                }
            });
        } // scroll to first error
        return isValid;
    }

    /**
     * Global Error Handler usage:
     *         }).catch(this.common.errorHandler);
     */
    public errorHandler = (e: any): void => {
        // tslint:disable-next-line:no-console
        console.log("*** Error Handler: ");
        // tslint:disable-next-line:no-console
        console.log(e);
        // let wasHandled = false;
        if (e.constructor === TypeError) {
            e = new CustomError(e.message, { errorCode: e.message, message: e.stack, name: "TypeError" });
        }
        if(e.faultcode == "sf:INVALID_SESSION_ID") {
            e = new CustomError(e.faultstring, { errorCode: e.faultcode, message: e.detail, name: "Bad Session"});
            this.data.criticalErrors.push(e);
            location.reload();
        }
        // e.message is the errorCode in most cases
        // this.data._customErrors.push(e);
        // switch (e.errorCode) {
        //     case "INVALID_TOKEN":
        //         // dude you are so logged out
        //         location.href = location.origin + "/login";
        //         break;
        //     case "INVALID_SESSION_ID":
        //         // dude you are so logged out
        //         location.href = location.origin + "/login";
        //         break;
        //     case "USER_AUTHENTICATION_FAILED":
        //         // Error with Docusign Credentials
        //         this.router.navigate("#/error/docusign/authentication-error");
        //         break;
        //     default:
        //         // Un-Specified Custom Error
        //         this.router.navigate("#/error");
        //         break;
        // }
    }

    public mobilecheck(): boolean {
        let check = false;
        ((a) => { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window["opera"]);
        return check;
    }
    public mobileAndTabletcheck(): boolean {
        let check = false;
        ((a) => { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window["opera"]);
        return check;
    }

    /**
     * Updates the DOM for bootstrap Radio buttons to be 'active'
     * This is used where we need to update the model as radio is selected
     * @param {$event} e
     *   js event
     * @return
     *   void
     */
    public bsRadio(e: any): void {
        // clear all other active elements, and their children inputs
        for (let elem of e.target.parentElement.parentElement.children) {
            elem.classList.remove("active");
            for (let inp of elem.children) {
                inp.checked = false;
            }
        }
        e.target.parentElement.classList.add("active");
    }

    /**
     * Updates the DOM for bootstrap Checkbox buttons to be 'active'
     * This is used where we need to update the model as radio is selected
     *
     * @param {$event} e
     *   js event
     * @return
     * void
     */
    public bsCheckbox(e: any): void {
        // clear all active elements
        if (e.target.parentElement.classList.contains("active")) {
            e.target.parentElement.classList.remove("active");
        }
        else {
            e.target.parentElement.classList.add("active");
        }
    }

    /**
     * Returns active class name if the item should be selected
     * Uses:
     *  1. Pass 2 string values to check if they match
     *  2. Pass an array and a string, to check if the string exists in the array
     *  3. Pass 2 objects, and a prop, to check if they match by prop.
     *  4a. Pass an array, an object, to check if the object matches against the array of objects.
     *  4b. Pass an array, an object, and a prop, to check if the prop value of the given object matches against the array of objects.
     *
     * @param {array of object, array, or variable} obj
     *   SelectedItem(s) to check val against
     * @param {object or variable} val
     *   Current Item to check
     * @param {string} prop
     *   Property to compare if previous were objects
     * @return
     *   String 'active' or ''
     * Example:   obj = [{id: 1234, name: "bob"},{id: 321, name: "bob"}]
     *           val = {id: 1234, name:"bob"}
     *           prop = "id"
     * Would return 'active'.
     */
    public isActive(obj: any, val: any, prop: any): string {
        if (val == null || obj == null) { return ""; }
        else if (obj.constructor === Array && val.constructor === Object && prop) {
            for (const v of obj) { if (v[prop] === val[prop]) { return "active"; } }
            return "";
        }
        else if (obj.constructor === Array && val.constructor === Object && !prop) {
            for (const v of obj) { if (v === val) { return "active"; } }
            return "";
        }
        else if (obj.constructor === Array) {
            for (const v of obj) { if (v === val) { return "active"; } }
            return "";
        }
        else if (obj.constructor === Object && val.constructor === Object && prop) {
            if (obj[prop] === val[prop]) { return "active"; }
            return "";
        }
        else if ((obj.constructor === Number && val.constructor === Number)
            || (obj.constructor === String && val.constructor === String)) {
            if (obj === val) { return "active"; }
            return "";
        }
        else {
           // logger.warn("isActive was passed incorrect parameter types, and has returned ''");
            return "";
        }
    }

    public clearObjectValues(objToClear): any {
        Object.keys(objToClear).forEach((param) => {
            if (objToClear[param] == null) {
                // nothing
            }
            else if (objToClear[param] != null && (objToClear[param].constructor === Object)) {
                this.clearObjectValues(objToClear[param]);
            } else if (objToClear[param] === true || objToClear[param] === false) {
                // set bools to false
                objToClear[param] = false;
            } else if (objToClear[param] != null && (objToClear[param].constructor === Date)) {
                objToClear[param] = null;
            } else {
                objToClear[param] = "";
            }
        });
        return objToClear;
    }

    /**
     *  Returns Array of Strings valid for the index provided
     *
     * @param {array of object} objPicklistValues
     *   Array of Picklist Values objects
     * @param {integer value} selectedIndex
     *   Current Index of item selected in parent field
     *   used to filter values in provided object of
     *   Picklist values
     * @return array of objects with string and index
     * index is needed for original place in array from SF
     */
    public getDependentValues(objPicklistValues: any, selectedIndex: number): any {
        // Iterate over picklist value object and check if it is a
        // dependent value for the parent selected index value
        const arrayObjPicklistValues = [];
        objPicklistValues.forEach((v, i) => {
            // console.log(v);
            // console.log(i);
            if (this.isDependentValue(selectedIndex, v.validFor)) {
                let objPicklistValue = {
                    index: i,
                    value: v.value
                };
                arrayObjPicklistValues.push(objPicklistValue);
            }
        });
        return arrayObjPicklistValues;
    }

    /**
     * Returns boolean for the index provided and ValidFor
     * base64 from Salesforce Field Metadata
     *
     * @param {Index ID} index
     *   Index ID of the value chosen by the parent
     *   controlling field
     * @param {base64 value} validFor
     *   Current Item in Picklist Values to check
     *   if valid for the parent selected value index
     *   this input value is in base64 enc
     * @return boolean
     */
    public isDependentValue(index: number, validFor: string): boolean {
        const decoded = atob(validFor);
        const bits = decoded.charCodeAt(index >> 3);

        return ((bits & (0x80 >> (index % 8))) !== 0);
    }

    public generateGuid(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }

 
    /**
     * Compares two objects and returns true if they have identical keys/values
     *
     * @param a 1st object to compare
     * @param b 2nd object to compare
     */
    objectsAreEquivalent(a, b) {
        // Create arrays of property names
        const aProps = Object.getOwnPropertyNames(a);
        const bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            const propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    /*
    * If a sub path is specified on the route
    * scroll to that section
    * @param appName the name of the app that is currently runnning
    * @param cOffset an optional offset
    */
    // public scrollToSection(appName?: any, cOffset?: any) {
    //     // get the current scroll position to include with top
    //     const bodyElement = document.getElementsByTagName("BODY")[0];
    //     bodyElement.scrollTop = 0;
    //     let scrollPosition = 0; //window.scrollY;
    //     let offset = 0;
    //     // if (cOffset) {
    //     //     offset = cOffset;
    //     // } else if (appName) {
    //     //     offset = this.getOffset(appName);
    //     // } else {
    //     //     offset = 0;
    //     // }

    //     let subPath = this.getSubPath();
    //     if (subPath) {
    //         // get the element to scroll to
    //         let scrollToElement = document.getElementsByName(subPath);
    //         // get the coordinates
    //         let coordinates = scrollToElement[0].getBoundingClientRect();
    //         // get the body
    //         let bodyElement = document.getElementsByTagName("BODY")[0];
    //         // determine the postion of the element and subtract the static elements
    //         // i.e. button bar, client header, etc
    //         bodyElement.scrollTop = (coordinates.top + scrollPosition) - offset;
    //     }
    // }


    public yesNoToBoolean(value: any) {
        let rtnValue: any = "";
        if (value === "Yes") {
            rtnValue =  true;
        } else if (value === "No") {
            rtnValue = false;
        } else if (value === true) {
            rtnValue = "Yes";
        } else if (value === false) {
            rtnValue = "No";
        }

        return rtnValue;
    }

    public getGUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
    }
    public getID() {
        return 'GENxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }
    
    public getParams = (query) => {
        if (!query) {
            return { };
        }

        return (/^[?#]/.test(query) ? query.slice(1) : query)
            .split("&")
            .reduce((params, param) => {
            let [ key, value ] = param.split("=");
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
            return params;
            }, { });
    }
}
