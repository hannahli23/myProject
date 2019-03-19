// import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
// import { DatatableComponent } from '@swimlane/ngx-datatable';
// import { DatabaseService } from '../../../services'

// const _clone = (d) => JSON.parse(JSON.stringify(d));

// @Component({
//     selector: 'app-ngxdatatable',
//     templateUrl: './ngxdatatable.component.html',
//     styleUrls: ['./ngxdatatable.component.scss'],
//     encapsulation: ViewEncapsulation.None
// })
// export class NgxdatatableComponent implements OnInit {

//     editing = {};
//     rows = [];
//     rowsFilter = [];
//     rowsExp = [];
//     rowsSort = [];
//     temp = [];
//     expanded: any = {};
//     timeout: any;

//     rowsSel = [];
//     selected = [];

//     columns = [
//         { prop: 'name' },
//         { name: 'Company' },
//         { name: 'Gender' }
//     ];
//     columnsSort = [
//         { prop: 'name' },
//         { name: 'Company' },
//         { name: 'Gender' }
//     ];
//     @ViewChild(DatatableComponent) table: DatatableComponent;
//     @ViewChild('myTable') tableExp: any;

//     constructor(private databaseService: DatabaseService) {

//         this.fetch((data) => {
//             // cache our list
//             this.temp = _clone(data);

//             this.rows = _clone(data);;
//             this.rowsFilter = _clone(data);;
//             this.rowsExp = _clone(data);
//             this.rowsSort = _clone(data);
//             this.rowsSel = _clone(data);
//             console.log("rowSel is", this.rowsSel);

//         });

//     }

//     onPage(event) {
//         clearTimeout(this.timeout);
//         this.timeout = setTimeout(() => {
//             console.log('paged!', event);
//         }, 100);
//     }
//     toggleExpandRow(row) {
//         console.log('Toggled Expand Row!', row);
//         this.tableExp.rowDetail.toggleExpandRow(row);
//     }

//     onDetailToggle(event) {
//         console.log('Detail Toggled', event);
//     }

//     fetch(cb) {
//         const req = new XMLHttpRequest();
//         req.open('GET', `assets/company.json`);

//         req.onload = () => {
//             cb(JSON.parse(req.response));
//         };

//         req.send();
//     }

//     updateValue(event, cell, rowIndex) {
//         console.log('inline editing rowIndex', rowIndex)
//         this.editing[rowIndex + '-' + cell] = false;
//         this.rows[rowIndex][cell] = event.target.value;
//         this.rows = [...this.rows];
//         console.log('UPDATED!', this.rows[rowIndex][cell]);
//     }

//     ngOnInit() {

//     }

//     updateFilter(event) {
//         const val = event.target.value.toLowerCase();

//         // filter our data
//         const temp = this.temp.filter(function(d) {
//             return d.name.toLowerCase().indexOf(val) !== -1 || !val;
//         });

//         // update the rows
//         this.rowsFilter = temp;
//         // Whenever the filter changes, always go back to the first page
//         this.table.offset = 0;
//     }

//     // Selection


//     onSelect({ selected }) {
//         console.log('Select Event', selected, this.selected);

//         this.selected.splice(0, this.selected.length);
//         this.selected.push(...selected);
//     }

//     onActivate(event) {
//         console.log('Activate Event', event);
//     }

// }


import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DatabaseService } from '../../../services';
import { CityService } from '../../../services';
import { DatabaseInstance }  from '../../../models';
import { City }  from '../../../models';

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
    selector: 'app-ngxdatatable',
    templateUrl: './ngxdatatable.component.html',
    styleUrls: ['./ngxdatatable.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgxdatatableComponent implements OnInit {

    private databaseInstance: Array<DatabaseInstance>;
    private city: Array<City>;
    private updateDBData: DatabaseInstance;
     newCOCDBdata: DatabaseInstance = new DatabaseInstance();
    editing = {};
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
        { prop: 'instanceName' },
        { name: 'dbName' }
    
    ];
    columnsSort = [
          { prop: 'instanceName' },
          { name: 'dbName' }
    ];

    // columns = [
    //         { prop: 'ID' }, 
    //         { name: 'CountryCode' },
    //         { name: 'District' },
    //         { name: 'Population' }
    
    // ];
    // columnsSort = [
    //     { prop: 'ID' },
    //         { name: 'CountryCode' },
    //         { name: 'District' },
    //         { name: 'Population' }
    // ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild('myTable') tableExp: any;

    constructor(private databaseService: DatabaseService,
                private cityService:CityService) {

        // this.getAllCity();
         this.getDatabaseInfo();

        console.log("columns is", this.columns.values);
        // this.fetch((data) => {
        //     // cache our list
        //     // this.getDatabaseInfo();
        //        this.getAllCity();
        //     // this.rows = this.databaseInstance;
        //     console.log("data here is", data);
        //     console.log("start to get data");
        //     console.log(this.rows);
        //     this.temp = _clone(data);

        //     this.rows = _clone(data);;
        //     this.rowsFilter = _clone(data);;
        //     this.rowsExp = _clone(data);
        //     this.rowsSort = _clone(data);
        //     this.rowsSel = _clone(data);
        //      console.log("row is", this.rows);

        // });

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
         this.cityService.getCityData()
          .subscribe((result)=> {
            console.log('getAllCity= ', result);
            // this.rows = [];
            this.rows = result;
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
