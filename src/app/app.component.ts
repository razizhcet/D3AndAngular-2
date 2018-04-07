import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h1>{{pageHeader}}</h1>`,
})
export class AppComponent  { pageHeader = 'Employee Details'; }
