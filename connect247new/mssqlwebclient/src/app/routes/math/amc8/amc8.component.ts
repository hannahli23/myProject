
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DatabaseService } from '../../../services';
import { CityService } from '../../../services';
 import { QuestionPkgService } from '../../../services';
import { DatabaseInstance }  from '../../../models';
import { City }  from '../../../models';
import { QuestionPKG }  from '../../../models';

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: 'app-amc8',
  templateUrl: './amc8.component.html',
 styleUrls: ['./amc8.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Amc8Component implements OnInit {
   private databaseInstance: Array<DatabaseInstance>;
    private city: Array<City>;
    private updateDBData: DatabaseInstance;
    currentUser:string;
     newCOCDBdata: DatabaseInstance = new DatabaseInstance();
    editing = {};
    packageTitle = {};
     packageDesc = {};
    rows = [];
    rowsFilter = [];
    rowsExp = [];
    rowsSort = [];
    temp = [];
    expanded: any = {};
    timeout: any;

    rowsSel = [];
    selected = [];

   columns = [
        { prop: 'questionYear' },
        { name: 'AMC8 Year' }
    
    ];
    columnsSort = [
          { prop: 'questionTitle' },
          { name: 'question Title' }
    ];
     @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild('myTable') tableExp: any;

    constructor(private databaseService: DatabaseService,
                private cityService:CityService,
                private questionPkgService:QuestionPkgService,
                ) {

        this.getQuestionPkg();
        this.currentUser = localStorage.getItem('name');

        // this.getAllCity();
        // this.getDatabaseInfo();

        console.log("columns is", this.columns.values);
         console.log("  this.currentUser",  this.currentUser);
   

    }

 onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.tableExp.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

    getDatabaseInfo(){
        this.databaseService.getDatabases()
          .subscribe((result)=> {
            //   this.databaseInstance = result;
            this.rows = result;
          console.log('get row info info= ', this.rows);
          }

          );
    }

     getAllCity(){
        //  this.cityService.getCityData()
          this.questionPkgService.getCityData()
          .subscribe((result)=> {
            console.log('getAllCity= ', result);
            // this.rows = [];
            this.rows = result;
          console.log('get row info info= ', this.rows);
          }

          );
    }

      getQuestionPkg(){
        //  this.cityService.getCityData()
          this.questionPkgService.getAMC8quPkgData()
          .subscribe((result)=> {
            console.log('getMAC8quPkgData= ', result);
            // this.rows = [];
            this.rows = result;
            this.packageTitle = this.rows[0]['pkgTitle']
             console.log('packageTitleo= ',  this.packageTitle);
          console.log('get row info info= ', this.rows);
          }

          );
    }

    //  fetch(cb){
    //     this.databaseService.getDatabases()
    //       .subscribe((result)=> {
    //           cb = result;
    //       console.log('get databaseInstance info= ', this.databaseInstance);
    //       }

    //       );
    // }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }
   

    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex)
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
         this.updateDBData = new DatabaseInstance;
        console.log('UPDATED!', this.rows[rowIndex][cell]);
        console.log('UPDATED id IS ', this.rows[rowIndex]['COCDBID']);
         this.updateDBData.dbName= this.rows[rowIndex][cell];
        this.updateDBData.COCDBID=this.rows[rowIndex]['COCDBID'];

         this.databaseService.putCOCDBbyID(this.updateDBData)
          .subscribe((result)=> {
            //   this.databaseInstance = result;
            // this.rows = result;
          console.log('updateResult= ', result);
    
       });
    }

    ngOnInit() {

    }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function(d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    // Selection


    onSelect({ selected }) {
        console.log('Select Event here');
        console.log('Select Event here', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        //  this.selected = _clone(selected);
        this.selected.push(...selected);
     
        console.log("selected is "+ this.selected[0].CountryCode)
    }

    onActivate(event) {
        console.log('Activate Event', event);
    }

    save(){
         console.log('On Save COCDBData: ', this.newCOCDBdata);
          this.databaseService.postCOCDBdata(this.newCOCDBdata)
        .subscribe((result)=>{
        //   console.log('New COCDB data created: ', this.newCOCDBdata.dbName);
          console.log('newResult= ', result);
        },
        err => {
        var message = JSON.parse(err._body);
        console.log(message)
        // this.toastr.error(message,'Create location note failed!')
        })

    }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-amc8',
//   templateUrl: './amc8.component.html',
//   styleUrls: ['./amc8.component.scss']
// })
// export class Amc8Component implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }