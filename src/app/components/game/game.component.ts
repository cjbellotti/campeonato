import { Component, Input } from '@angular/core';
import { Game } from '../../models/game';


@Component({
  selector : 'game',
  templateUrl : './game.component.html',
  styleUrls : ['./game.component.css']
})

export class GameComponent {

  @Input() public game: Game;

  constructor() {
  }

}
