import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { User } from '../models/user';
import { Game } from '../models/game';
import { Prediction } from '../models/prediction';
import { Position } from '../models/position';
declare var users : any;

@Injectable()
export class UserService {
  private _gameService : GameService;

  constructor(){
    this._gameService = new GameService();
  }

  public getAll() : Array<User> {
    let lista : Array<User> = new Array<User>();
    users.forEach(user => {
      lista.push(this.populate(user));
    });
    return lista;
  }

  get(id : number) : User {
    let user : User = null;
    let result = users.filter(u => u.id == id);
    if (result.length > 0) {
      user = this.populate(result[0]);
    }
    return user;
  }

  getRanking() : Array<Position>{
    let lista : Array<Position> = new Array<Position>();
    let userList : Array<User> = this.getAll();
    let gameList : Array<Game> = this._gameService.getAll();
    let fechaHoy : Date = new Date();
    userList.forEach(user => {
      var position : Position = new Position(
        user.name,
        0
      );
      user.predictions.forEach(prediction => {
        if (prediction.game.player1.name != 'Por definir' && prediction.game.player2.name != 'Por definir' &&
            prediction.game.date < fechaHoy) {
          if ((prediction.game.score1 > prediction.game.score2 &&
               prediction.score1 > prediction.score2) ||
              (prediction.game.score1 < prediction.game.score2 &&
               prediction.score1 < prediction.score2) ||
              (prediction.game.score1 == prediction.game.score2 &&
               prediction.score1 == prediction.score2)) {
            console.log(`${user.name} por 3 ${prediction.game.score1} - ${prediction.game.score2} - ${prediction.game.date}`);
            position.score += 3;
          }
          if (prediction.score1 == prediction.game.score1 &&
              prediction.score2 == prediction.game.score2){
            console.log(`${user.name} por 1 ${prediction.game.score1} - ${prediction.game.score2}`);
            position.score += 1;
          }
        }
      });
      console.log(`${position.name} ${position.score}`);
      lista.push(position);
    });
    return lista;
  }

  private populate(data : any) : User {
    let predictions : Array<Prediction> = new Array<Prediction>();
    data.predictions.forEach(prediction => {
      predictions.push(this.populatePrediction(prediction));
    });
    let user : User = new User(
      data.name,
      predictions,
      data.score1,
      data.score2
    );
    return user;
  }

  private populatePrediction(data : any) : Prediction {
    let prediction : Prediction = new Prediction(
      this._gameService.get(data.gameId),
      data.score1,
      data.score2
    );
    return prediction;
  }

}
