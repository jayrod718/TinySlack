import {Case} from "../classes/data-classes";
/**
 * If we are running locally, this will mock data.
 */
export class Mock {
    /** Generated from
     * Saleforce Debug Console - Execute Anonymous
       List<Account> f = [SELECT Id,Name FROM Account WHERE Name = 'Test Americas' order by name];
       String j = JSON.serialize(f);
       system.debug(j);
      */
    // MOCK DATA FOR CASE
    public ProductChoices: any[] = [
      {"label":"MongoDB Enterprise Advanced","value":"MongoDB Enterprise Advanced"}
      ,{"label":"MongoDB","value":"MongoDB"}
      ,{"label":"Atlas","value":"Atlas"}];
  }
