import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AgGridModule } from 'ag-grid-angular/main';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { CocdbappComponent } from './cocdbapp/cocdbapp.component';
import { AuthGuardService } from '../../services/authGuard';

const routes: Routes = [
    { path: '', component: CocdbappComponent,canActivate: [AuthGuardService]  },
    
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    Ng2TableModule,
        NgxDatatableModule
  ],
  declarations: [
    CocdbappComponent
   
    ],
   exports: [
        RouterModule
    ]
})
export class CocdbappModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';

// import { Ng2TableModule } from 'ng2-table/ng2-table';
// import { AgGridModule } from 'ag-grid-angular/main';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import { CocdbappComponent } from './cocdbapp/cocdbapp.component';

// const routes: Routes = [
//     { path: '', component: CocdbappComponent },
    
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
//   declarations: [
//     CocdbappComponent,
//     ],
//    exports: [
//         RouterModule
//     ]
// })
// export class CocdbappModule { }
