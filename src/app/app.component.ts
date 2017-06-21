import { Component } from '@angular/core';
import { PlayerService } from './services/player.service';
import { GameService } from './services/game.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ PlayerService, GameService, UserService ]
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private _playerService : PlayerService,
    private _gameService : GameService,
    private _userService : UserService
  ) {}

  ngOnInit() {
    // console.log(JSON.stringify(this._playerService.get(3)));
    // console.log(JSON.stringify(this._playerService.get(10)));
    // console.log(JSON.stringify(this._gameService.get(7)));
    // console.log(JSON.stringify(this._userService.get(1)));
    console.log(this._userService.getRanking());
  }
}
