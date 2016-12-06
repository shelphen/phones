import { Component } from '@angular/core';

import { PhoneService } from './services/phones.services';

@Component({
	selector: 'phones-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css'],
	providers: [PhoneService]
})

export class AppComponent { }