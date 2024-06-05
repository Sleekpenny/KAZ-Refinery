import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSignInPage } from './page-sign-in.page';

describe('PageSignInPage', () => {
  let component: PageSignInPage;
  let fixture: ComponentFixture<PageSignInPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
