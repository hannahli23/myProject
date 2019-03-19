import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AgGridModule } from 'ag-grid-angular/main';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService } from '../../services/authGuard';

import { Amc8Component } from './amc8/amc8.component';

// const routes: Routes = [
//     { path: '', component:  Amc8Component,canActivate: [AuthGuardService]  },
    
// ];
const routes: Routes = [
    { path: '', component:  Amc8Component },
    
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    Ng2TableModule,
        NgxDatatableModule
  ],
  declarations: [Amc8Component]
})
export class MathModule { 
   RouterModule
}
