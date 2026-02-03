import { Injectable, signal } from '@angular/core';
import { DataType } from './insestment-service.model';
import { ResultType } from './insestment-service.model';

@Injectable({
  providedIn: 'root',
})
export class InsestmentService {
  resultData=signal<DataType[] | undefined>(undefined);

  calculateInvestmentResults(data:ResultType) {
    const {initialInvestment,annualInvestment,expectedReturn,duration}=data;
    const annualData = [];
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
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
  this.resultData.set(annualData);
}
}
