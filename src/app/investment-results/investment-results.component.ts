import { Component, computed, input } from '@angular/core';
import { InvestmentResults } from '../investment-results';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {


  constructor(private _InvestmentService:InvestmentService){}

  // get results(){
  //   return this._InvestmentService.resultsData;
  // }

  //same of code in 25
  //results =  this._InvestmentService.resultsData.asReadonly()

  results = computed(()=> this._InvestmentService.resultsData())
}
