import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { PlayerService } from './player.service';
declare var games : any;

@Injectable()
export class GameService {

  private _playerService : PlayerService;

  constructor(){
    this._playerService = new PlayerService();
  }

  getAll() : Array<Game> {
    let lista : Array<Game> = new Array<Game>();
    games.forEach(game => {
        lista.push(this.populate(game));
    });
    return lista;
  }

  get(id : number) : Game {
    let game : Game = null;
    let result = games.filter(g => g.id == id);
    if (result.length > 0) {
      game = this.populate(result[0]);
    }
    return game;
  }

  private populate(gameData : any) : Game {
    let game : Game = new Game(
      gameData.date,
      gameData.time,
      gameData.phase,
      gameData.place,
      this._playerService.get(gameData.player1),
      this._playerService.get(gameData.player2),
      gameData.score1,
      gameData.score2
    );
    return game;
  }

}
