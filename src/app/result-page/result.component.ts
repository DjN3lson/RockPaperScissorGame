import { Component } from '@angular/core';
import { GameService} from "../game.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  userChoice: string = '';
  computerChoice: string = '';
  result: string ='';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.userChoice = this.gameService.getUserChoice();
    this.computerChoice = this.gameService.getComputerChoice();
    this.result = this.gameService.getResult();
  }
}
