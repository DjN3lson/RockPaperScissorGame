import { Component } from '@angular/core';
import { GameService} from "../game.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  userChoice: string = '';

  constructor(private gameService: GameService) {}

  play() {
    this.gameService.setUserChoice(this.userChoice);
  }
}
