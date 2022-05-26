import { Action } from '@ngrx/store';

interface Product {
  id: number,
    uid: string,
    blend_name: string,
    origin: string,
    intensifier: string,
    notes: string,
    variety: String
}

export enum ActionTypes {
  Add = '[Product] Add to cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success'
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}


export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddToCart | LoadItems | GetItems;
