import { inject, TaskQueue } from "aurelia-framework";
import {Data} from "./resources/data";
import {Common} from "./resources/common";
import {Mock} from "./resources/mock";
import {Promise} from "bluebird";
import {IdName} from "./classes/data-classes";
import * as moment from 'moment';
import {CustomError} from './classes/error';
import { transform } from "typescript";
import * as _ from "lodash";

@inject(Data, Mock, Common, TaskQueue)
export class App {
    private data: Data;
    private mock: Mock;
    private common: Common;
    private taskQueue: TaskQueue;
    private isLoaded = false;
    private isLoading: boolean = false;
    private isInSaveProcess: boolean = true;
    private currentErrorMessage: string = '';

    private strMessage: string = "";

  constructor(private _data: Data, private _mock: Mock, private _common: Common, private _taskQ: TaskQueue){
    this.data = _data;
    this.mock = _mock;
    this.common = _common;
    this.taskQueue = _taskQ;
    this.currentErrorMessage = '';

    console.log('Constructor Firing');
    // Load initial page data in promise
    Promise.join(
      this.loadData(),
    )
    .then((results: any) => {
      // console.log('@@@@ This Load Data', this);
    }).catch((err) => {
      console.log('Constructor: Catching error after promise in constructor.');
      this.currentErrorMessage = err;      
    });
  }
  
  public loadData() {
    return new Promise((resolve, reject) => {
      if (window["MDB"].isTest) {
        console.log('Loading Mock Data');
        this.isLoading = true;      
        // LOAD MOCK DATA
      
        // This will make the loading icon go away and unblock the UI
        this.isLoaded = true;
        this.isLoading = false;
        resolve("success");
      } else {
        this.isLoading = true;
      }
    });
  }

  // This is called once the UI is fully attached
  public attached() {
  }

  public closeError = () => {
    this.currentErrorMessage = '';
  }

  // This is the save function for the Form, runs in Promise Async
  public Save = () => {
    if(this.common.validateInputs('default')) {
      // console.log('@@@@@ Form Valid');
      this.isLoading = true;
      
    } else {
      console.log('@@@@@ Form Invalid');
    }
  }
}