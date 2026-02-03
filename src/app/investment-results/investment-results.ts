import { Component , computed, inject} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InsestmentService } from '../insestment-service';


@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
 private insestmentService=inject(InsestmentService);
 results=computed(()=>this.insestmentService.resultData());
}
