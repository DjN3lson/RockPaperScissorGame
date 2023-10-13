import { Component } from '@angular/core';
import { GameService} from "../game.service";

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent {
  choices: string[] = ['Rock.png', 'Paper.png', 'Scissor.png'];
  constructor(private gameService: GameService) {}

  getResult(){
    return this.gameService.getResult();
  }
}
