import { IPhone } from './phone-item.model';

export class PhonesList {
	phonesList: any;

	constructor(private id = 0) {
		this.phonesList = [
			{id: 1, name: 'iPhone', model: '4', price: 50},
			{id: 2, name: 'iPhone', model: '5', price: 150},
			{id: 3, name: 'iPhone', model: '5s', price: 250},
			{id: 4, name: 'iPhone', model: '3gs', price: 5},
			{id: 5, name: 'iPhone', model: '6s', price: 550}
		];
		if (id != 0) this.phonesList = this.phonesList[id];
	}
}