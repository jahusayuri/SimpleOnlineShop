import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserService } from '../../services/user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as user from '../actions/user';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserEffects {

  // @Effect()
  // loadUser$ = this.action$
  //   .ofType(user.LOAD_USER)
  //   .startWith(new user.UserLoadAction())
  //   .switchMap(() => {
  //     this.service.
  //   })

  @Effect()
  loadUsers$: Observable<Action> = this.action$
    .ofType(user.LOAD_USERS)
    .startWith(new user.UsersLoadAction())
    .switchMap(() => this.service.findAll()
      .map(res => new user.UsersLoadSuccessAction(res))
      .catch(err => of(new user.UsersLoadFailureAction(err)))
    );

  constructor(private action$: Actions,
              private service: UserService) { }
}
