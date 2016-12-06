import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

import { PhonesList } from '../models/phones-list.model';

@Component ({
	selector: 'phone-item',
	templateUrl: './app/components/phone-item.component.html',
	styleUrls: ['./app/components/phone-item.component.css'],
})

export class PhoneItemComponent {
	phonesList: any;
	phoneId: number;

	private subscription: Subscription;

	  constructor(private activatedRoute: ActivatedRoute) {}

	  ngOnInit() {
	    // subscribe to router event
	    this.subscription = this.activatedRoute.params.subscribe(
	      (param: any) => {
	        this.phoneId = param['id'];
	        this.phonesList = new PhonesList(this.phoneId);
	        console.log(this.phonesList);
	      });
	  }

	  ngOnDestroy() {
	    // prevent memory leak by unsubscribing
	    this.subscription.unsubscribe();
	  }

}