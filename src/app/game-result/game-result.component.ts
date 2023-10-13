import { Component } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent {
  constructor(public gameService: GameService) { }
}
