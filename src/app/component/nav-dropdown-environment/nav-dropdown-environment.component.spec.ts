import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavDropdownEnvironmentComponent } from './nav-dropdown-environment.component';

describe('NavDropdownEnvironmentComponent', () => {
  let component: NavDropdownEnvironmentComponent;
  let fixture: ComponentFixture<NavDropdownEnvironmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDropdownEnvironmentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavDropdownEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
