import {IdName, Case} from "../classes/data-classes";
import * as moment from 'moment';
import * as _ from 'lodash';

export class Data {
    public criticalErrors: any[] = [];

    // Vars for Case
    public ProductChoices: any[];
    public SeverityChoices: any[];
    public MongoDBVersionChoices: any[];
    public StorageEngineChoices: any[];
    public RootCauseChoices: any[];
    public LevelOfEffortChoices: any[];
    public ComponentsChoices: any[];

    // This is called on page load if there is a URL Param, also used if project is in URL after the project is loaded
    public loadAccountById(strID) {
        if(strID) {
            let query = "SELECT Id, Name, Account_Country__c FROM Account WHERE ID = '" + strID + "'";
            console.log("INFO [data] Running Soql: " + query);
            return new Promise(function(resolve, reject) {
                sforce.connection.query(query, {onSuccess: resolve, onFailure: reject});
            });
        } else {
            return new Promise(function(resolve, reject) {
                resolve();
            });
        }
    }

    public loadProjectById(strID) {
        if(strID) {
            let query = "SELECT Id, Name, Account__c, Onboarding_Status__c, Account__r.Name, Account__r.Id, Account__r.Account_Country__c FROM Project__c WHERE ID = '" + strID + "'";
            console.log("INFO [data] Running Soql: " + query);
            return new Promise(function(resolve, reject) {
                sforce.connection.query(query, {onSuccess: resolve, onFailure: reject});
            });
        } else {
            return new Promise(function(resolve, reject) {
                resolve();
            });
        }
    }

    public loadCloudProjectById(strID) {
        if(strID) {
            let query = "SELECT Id, Name, Group_Id__c, Support_Ultimate_Date__c, Account__c, Account__r.Name, Account__r.Id, Account__r.Account_Country__c FROM Cloud_Project__c WHERE ID = '" + strID + "'";
            console.log("INFO [data] Running Soql: " + query);
            return new Promise(function(resolve, reject) {
                sforce.connection.query(query, {onSuccess: resolve, onFailure: reject});
            });
        } else {
            return new Promise(function(resolve, reject) {
                resolve();
            });
        }
    }

    public AddNewCase(objCase: Case) {
        return new Promise(function(resolve, reject) {
            CaseCreateController.AddNewCase(objCase,
                (result, event) => {
                    if (event.status && result) {
                        resolve(result);
                    } else {
                        reject(Error(event.message));
                    }
                });
        });
    }

    public sforceQuery(query) {
        console.log("INFO [data] Running Soql: " + query);
        return new Promise(function(resolve, reject) {
            sforce.connection.query(query, {onSuccess: resolve, onFailure: reject});
        });
    }

    public sforceDescribe(object) {
        return new Promise(function(resolve, reject) {
            sforce.connection.describeSObject(object, {onSuccess: resolve, onFailure: reject});
        });
    }

    // This will return the Record Type Info for the specified Record Type ID on the object
    public sforceDescribeLayout(object, layoutname, recordTypeID) {
        return new Promise(function(resolve, reject) {
            sforce.connection.describeLayout(object, layoutname, [recordTypeID], {onSuccess: resolve, onFailure: reject});
        });
    }
   
    public getPicklistValues(glob, name) {
        let results = [];
        if (glob.fields) {
            glob.fields.forEach((f) => {
                if (f.name == name) {
                    f.picklistValues.forEach((pv) => {
                        if (pv.active == "true") {
                            results.push({label: pv.label, value: pv.value});
                        } 
                    });
                    return results; //break loop.
                }
            });
        }
        return results;
    }

    // Used in conjunction with the Describe layout call to parse picklists by record type active values
    public getPicklistValuesByRecordType(glob, name) {
        let results = [];
        if (glob.recordTypeMappings && glob.recordTypeMappings.picklistsForRecordType) {
            glob.recordTypeMappings.picklistsForRecordType.forEach((f) => {
                if (f.picklistName == name) {
                    f.picklistValues.forEach((pv) => {
                        if (pv.active == "true") {
                            results.push({label: pv.label, value: pv.value});
                        } 
                    });
                    return results; //break loop.
                }
            });
        }
        return results;
    }
}

