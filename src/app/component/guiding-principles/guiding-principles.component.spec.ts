import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuidingPrinciplesComponent } from './guiding-principles.component';

describe('GuidingPrinciplesComponent', () => {
  let component: GuidingPrinciplesComponent;
  let fixture: ComponentFixture<GuidingPrinciplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidingPrinciplesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidingPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
