import { Injectable, signal } from '@angular/core';
import { Calculate } from './calculate';
import { InvestmentResults } from './investment-results';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  resultsData = signal<InvestmentResults[] | undefined>(undefined);
  ;

  constructor() { }

  calculateInvestmentResults(data:Calculate) {
    const {
      initialInvestment,
      duration,
      expectedReturn,
      annualInvestment} = data
      const annualData = [];
      let investmentValue = initialInvestment;
    
      for (let i = 0; i < duration; i++) { //0:9
        const year = i + 1;//1:10
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
          investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
    
       this.resultsData.set(annualData);
      // console.log( );
      
    }
}
