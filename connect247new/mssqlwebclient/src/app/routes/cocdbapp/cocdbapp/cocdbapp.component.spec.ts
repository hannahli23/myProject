import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CocdbappComponent } from './cocdbapp.component';

describe('CocdbappComponent', () => {
  let component: CocdbappComponent;
  let fixture: ComponentFixture<CocdbappComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CocdbappComponent ],
  //     imports: [
  //       NgxDatatableModule ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocdbappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocdbappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CocdbappComponent } from './cocdbapp.component';

// describe('CocdbappComponent', () => {
//   let component: CocdbappComponent;
//   let fixture: ComponentFixture<CocdbappComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CocdbappComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CocdbappComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
