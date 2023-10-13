import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {
  constructor(public gameService: GameService) {}
}
