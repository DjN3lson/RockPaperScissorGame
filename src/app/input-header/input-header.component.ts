import { Component } from '@angular/core';
import {GameService} from "../game.service";
@Component({
  selector: 'app-input-header',
  templateUrl: './input-header.component.html',
  styleUrls: ['./input-header.component.css']
})
export class InputHeaderComponent {
  constructor(private gameService: GameService) {}

  selectMove(move: string) {
    this.gameService.setUserMove(move);
  }

  playGame() {
    this.gameService.play();
  }
}

