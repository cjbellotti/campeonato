import { Player } from './player';

export class Game {

  constructor (
    public date : Date,
    public time : string,
    public phase : string,
    public place : string,
    public player1: Player,
    public player2: Player,
    public score1: number,
    public score2: number
  ){}
}
