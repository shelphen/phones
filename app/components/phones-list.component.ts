import { Component } from '@angular/core';

import { PhonesList } from '../models/phones-list.model';

@Component ({
	selector: 'phones-list',
	templateUrl: './app/components/phones-list.component.html',
	styleUrls: ['./app/components/phones-list.component.css'],
})

export class PhonesListComponent {
	title = 'sdfdsfsdf';
	phonesList = new PhonesList();
}