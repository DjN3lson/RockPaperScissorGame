import { Component } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  userChoice: string = '';

  constructor(private dataService: DataService) {}

  play() {
    this.dataService.setUserChoice(this.userChoice);
  }
}
