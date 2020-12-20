import { Car } from './car';

export interface Manufacturer extends Car {
  name: string;
  carList: Array<Car>;
}
