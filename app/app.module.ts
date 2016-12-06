import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { PhonesListComponent }   from './components/phones-list.component';
import { PhoneItemComponent }   from './components/phone-item.component';
import { HomeComponent }   from './components/home.component';
import { ContactsComponent }   from './components/contacts.component';
import { PhoneService }   from './services/phones.services';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'phones-list', component: PhonesListComponent },
	{ path: 'phone/:id', component: PhoneItemComponent },
	{ path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpModule ],
  exports: 		[ RouterModule ],
  declarations: [ AppComponent, HomeComponent, PhonesListComponent, ContactsComponent, PhoneItemComponent ],
  providers: 	[ PhoneService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}