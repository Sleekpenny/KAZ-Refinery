import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyTermOfOperationComponent } from './company-term-of-operation.component';

describe('CompanyTermOfOperationComponent', () => {
  let component: CompanyTermOfOperationComponent;
  let fixture: ComponentFixture<CompanyTermOfOperationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTermOfOperationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyTermOfOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
