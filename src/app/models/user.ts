import  { Prediction } from './prediction';

export class User {

  constructor(
    public name : string,
    public predictions : Array<Prediction>,
    public score1 : number,
    public score2 : number
  ){}
}
