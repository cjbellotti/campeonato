import { Game } from './game';

export class Prediction {

  constructor(
    public game : Game,
    public score1 : number,
    public score2 :number
  ){}

}
