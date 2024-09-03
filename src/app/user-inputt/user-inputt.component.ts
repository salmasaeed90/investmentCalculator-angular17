import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculate } from '../calculate';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-inputt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputt.component.html',
  styleUrl: './user-inputt.component.css'
})
export class UserInputtComponent {

  //calculate = output<Calculate>()
  initialInvestment =signal('0');
  annualInvestment =signal('0');
  expectedReturn =signal('5');
  duration =signal('10');


  constructor(private _InvestmentService:InvestmentService){}

  onSubmit(){
    this._InvestmentService.calculateInvestmentResults(
      {
        initialInvestment:+this.initialInvestment(),
        duration:+this.duration(),
        expectedReturn:+this.expectedReturn(),
        annualInvestment:+this.annualInvestment()
  
      }
    )
    //this.calculate.emit();
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
