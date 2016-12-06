export interface IPhone {
	id: number;
	name: string;
	model: string;
	price: number;
}

export class PhoneItem implements IPhone {
	id: number;
	name: string;
	model: string;
	price: number;

	constructor() {
		
	}

}