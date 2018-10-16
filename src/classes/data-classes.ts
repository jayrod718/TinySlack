import { EPERM } from "constants";

/**
 * All the data classes you need for the app, some people might seperate these.
 */
export class IdName {
    public attributes?: any;
    public Id: string;
    public Name?: string;
}

export class Case {   
    public Id?: string; //string
    public Name?: string; //string
    public RecordTypeId?: string;
    public AccountId?: string;
    public Cloud_Project__c?: string;
    public Project__c?: string;
    public ContactId?: string;
    public Product__c?: string;
    public MongoDB_Version__c?: string;
    public Storage_Engine__c?: string;
    public Level_of_Effort__c?: string;
    public Root_Cause__c?: string;
    public Autoclose_Allowed_Date__c?: number;
    public Severity__c?: string;
    public Subject?: string;
    public Description?: string;
    public Resolution__c?: string;
    public Status?: string;
    public Components__c?: string;
}

export class Account {
    public attributes?: any;    
    public Id: string; //string
    public Name?: string; //string
    public RecordTypeId?: string;
    public CurrencyIsoCode?: string;    
}

export class Project {
    public attributes?: any;
    public Id: string;
    public Name: string;
    public Account__c?: string;
    public CreatedDate?: Date;
    public Onboarding_Status__c?: string;
    public CurrencyIsoCode?: string;    
    public Use_Case_Type__c?: string;
    public Use_Case__c?: string;
    public Department__c?: string;
    public Description__c?: string;
    public View_In_Clienthub__c?: string;
    public Support_Expiration_Date__c?: Date;
    public Support_Ultimate_Date__c?: Date;    
    public SupportExpirationDateString?: string;
    public SupportUltimateDateString?: string;
    public CurrentlyAssociated?: boolean;
    public Associate?: boolean;
}

export class Owner {
    public attributes?: any;    
    public Id: string;
    public Name: string;
    public CurrencyIsoCode?: string;
}

export class Contact {
    public Id?: string;
    public CurrencyIsoCode?: string;    
    public attributes?: any;    
    public Name?: string;
    public Email?: string;
    public RecordTypeId?: string;
    public Community_User_Status__c?: string;
    public FCRM__FCR_Status__c?: string;
    public Account?: Account;
}