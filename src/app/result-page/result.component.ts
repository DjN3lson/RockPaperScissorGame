import { Component } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  userChoice: string = '';
  computerChoice: string = '';
  result: string ='';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.userChoice = this.dataService.getUserChoice();
    this.computerChoice = this.dataService.getComputerChoice();
    this.result = this.dataService.getResult();
  }
}
