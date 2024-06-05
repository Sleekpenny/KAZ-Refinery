import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[navigateTo]',
//  standalone: true
})
export class NavigatorDirective {
@Input('navigateTo') route: string;

  constructor(private router: Router) { }

  @HostListener('click') onClick() {
    this.router.navigate([this.route])
  }

}
