import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputtComponent } from './user-inputt/user-inputt.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent,InvestmentResultsComponent, UserInputtComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

 
}
