import { Car } from './car';

export interface Manufacturer {
  name: string;
  carList: Array<Car>;
}
