import { Injectable } from '@angular/core';
import { Player } from '../models/player';
declare var players : any;

@Injectable()
export class PlayerService {

  getAll() : Array<Player> {

    let lista : Array<Player> = new Array<Player>();

    players.forEach( player => {
      lista.push(new Player(player.name, player.image))
    });
    return lista;
  }

  get(id : number) : Player {
    var playerVal = players.filter(p => p.id == id);
    var player : Player = null;
    if (playerVal.length > 0) {
      player = new Player(playerVal[0].name, playerVal[0].image);
    }
    return player;
  }

}
