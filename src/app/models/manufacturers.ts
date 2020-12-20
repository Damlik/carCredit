import {Manufacturer} from './manufacturer';

export interface Manufacturers extends Manufacturer {
  manufacturers: Array<Manufacturer>;
}
