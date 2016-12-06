import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';

import { IPhone } from '../models/phone-item.model';

@Injectable()

export class PhoneService {

	private apiUrl = 'http://api.angular.ng/';

	constructor (private http: Http) {

	}

	getFirst(): Observable<IPhone[]> {
		return this.http.get(this.apiUrl)
						.map(res => { return res.json(); })
						.catch(this.handleError);
	}

	private handleError(error: any): Observable<any> {
		console.log('Произошла ошибка', error);
		return Observable.throw(error.message || error);
	}
}