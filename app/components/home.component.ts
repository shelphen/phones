import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../services/phones.services';
import { IPhone } from '../models/phone-item.model';

@Component ({
	selector: 'home',
	templateUrl: './app/components/home.component.html',
	styleUrls: ['./app/components/home.component.css']
})

export class HomeComponent implements OnInit {

	phones: IPhone[];

	constructor(private phoneService: PhoneService) {
		this.phones = [];
	}

	ngOnInit() {
		this.phoneService.getFirst().subscribe(phones => this.phones = phones);
	}

}