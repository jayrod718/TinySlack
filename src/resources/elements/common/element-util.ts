import * as _ from "lodash";
import { Common } from "../../common";

module ElementUtil {
    export function attached(common: Common, formName: string, required: boolean, clear: Function, myValidator: Function): void {
        if (!common.globalInputClearFunctions[formName]) { common.globalInputClearFunctions[formName] = []; }
        common.globalInputClearFunctions[formName].push(clear);

        if (required) {
            if (!common.globalValidationFunctions[formName]) { common.globalValidationFunctions[formName] = []; }
            common.globalValidationFunctions[formName].push(myValidator);
        }
    }

    export function detached(common: Common, formName: string, required: boolean, clear: Function, myValidator: Function): void {
        // remove from globalclear
        if (common.globalInputClearFunctions[formName]) {
            for (let i = 0; i < common.globalInputClearFunctions[formName].length; i++) {
                if (common.globalInputClearFunctions[formName][i] === clear) {
                    // console.log('match');
                    common.globalInputClearFunctions[formName].splice(i, 1);
                }
            }
        }
        if (required) { // remove from globalValidation
            if (common.globalValidationFunctions[formName]) {
                for (let i = 0; i < common.globalValidationFunctions[formName].length; i++) {
                    if (common.globalValidationFunctions[formName][i] === myValidator) {
                        // console.log('match');
                        common.globalValidationFunctions[formName].splice(i, 1);
                    }
                }
            }
        }
    }

    export function isVisible(e: HTMLElement): boolean {
        return e && e.offsetParent != null;
    }

    class LongTextResult {
        public isStackedClass: boolean = false;
        public isStackedLongText: boolean = false;
    }

    export function activeMap(items: any[], item: any): boolean[] {
        let newMap: boolean[] = [];
        if (!items) { return newMap; }
        items.forEach((obj) => {
            let val = false;
            if (ElementUtil.areObjects(items)) {
                val = _.isEqual(item, obj);
            }
            else {
                val = item === obj;
            }
            newMap.push(val);
        });
        return newMap;
    }

    export function areObjects(items: any): boolean {
        return !(items
            && items.length
            && items.length > 0
            && items[0].constructor === String);
    }

    export function removeAllActiveChildren(elem: HTMLElement): void {
        if (elem) {
            const list: Element[] = Array.from(elem.getElementsByClassName("active"));
            if (list && list.length > 0) {
                list.forEach((e) => {
                    if (e.classList.contains("active")) {
                        e.classList.remove("active");
                    }
                });
            }
        }
    }

    export function setActiveFromActiveMap(elems: any[], activeMap: boolean[]): void {
        if (elems) {
            for (let i = 0; i < elems.length; i++) {
                if (activeMap[i]) {
                    elems[i].classList.add("active");
                }
            }
        }
    }

    export function setActiveNonZeroFromActiveMap(elems: any[], activeMap: boolean[]): void {
        if (elems) {
            let wasTrue = false;
            for (let i = 1; i < elems.length; i++) {
                if (activeMap[i - 1]) {
                    wasTrue = true;
                    elems[i].classList.add("active");
                }
            }
            if (!wasTrue) { elems[0].classList.add("active"); }
        }
    }

    export function setOptionFromActiveMap(elems: any[], activeMap: boolean[]): void {
        let wasTrue = false;
        if (elems && elems.length > 0) {
            for (let i = 1; i < elems.length; i++) {
                elems[i].selected = activeMap[i - 1];
                if (activeMap[i - 1]) { wasTrue = true; }
            }
            if (!wasTrue) { elems[0].selected = true; }
        }

    }
}

export default ElementUtil;
