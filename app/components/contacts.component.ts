import { Component } from '@angular/core';

@Component ({
	selector: 'contacts',
	templateUrl: './app/components/contacts.component.html',
	styleUrls: ['./app/components/contacts.component.css'],
})

export class ContactsComponent {
	title = 'Контакты';
	text = 'Здесь будут написаны контакты, как со мной связаться.';
}