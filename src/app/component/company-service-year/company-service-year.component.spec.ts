import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyServiceYearComponent } from './company-service-year.component';

describe('CompanyServiceYearComponent', () => {
  let component: CompanyServiceYearComponent;
  let fixture: ComponentFixture<CompanyServiceYearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyServiceYearComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyServiceYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
