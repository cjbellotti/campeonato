import { Component, Input } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector : 'results',
  templateUrl : './results.component.html'
})
export class ResultsComponent {

  public games : Array<Game>;

  constructor(
    private _gameService : GameService
  ) {}

  ngOnInit() {
    this.games = this._gameService.getAll();
  }

}
