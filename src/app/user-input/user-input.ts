import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsestmentService } from '../insestment-service';

interface data_Type{
  initialInvestment:number;
  duration:number;
  expectedReturn:number;
  annualInvestment:number;

}

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  private insesmentService=inject(InsestmentService);
  enteredInitialInvestment=signal('0');
  enteredAnnualInvestment=signal('0');
  enteredExpectedReturn=signal('5');
  entredDuration=signal('10');
onSubmit(){
  this.insesmentService.calculateInvestmentResults({
    initialInvestment:+this.enteredInitialInvestment(),
    duration:+this.entredDuration(),
    expectedReturn:+this.enteredExpectedReturn(),
    annualInvestment:+this.enteredAnnualInvestment( ),
    })
}

}
