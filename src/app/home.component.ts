import { Component, OnInit, ɵConsole } from '@angular/core';
import { books } from './services/interface.servise';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root', 
  	styleUrls: ['./app.component.scss'],
  	templateUrl: './app.component.html'
})
export class HomeComponent implements OnInit {
	arraylocalStorage: books[] = [];
	details: books[];
	paramYear: string = 'asc';
	paramName: string = 'asc';
	constructor(
		private router: Router
	) {
		if(localStorage.getItem("localStorageBooks")){
			this.arraylocalStorage = JSON.parse(localStorage.getItem("localStorageBooks"));
		} else {
			localStorage.setItem("localStorageBooks", JSON.stringify(this.arraylocalStorage));
			this.arraylocalStorage = JSON.parse(localStorage.getItem("localStorageBooks"));
			this.paramYear = localStorage.getItem('paramYear');
			this.paramName = localStorage.getItem('paramName');
		}
	}

	ngOnInit() {
	}

	lastId() {
		
		return this.arraylocalStorage.length ? this.arraylocalStorage[this.arraylocalStorage.length - 1].id : 0
	}

	sortName(data: string) {
		this.arraylocalStorage.sort((a: any, b: any) => {
			a = a.name.toLowerCase(),
			b = b.name.toLowerCase();

			if ((data == 'asc') && (a == b)) {
				this.paramName = 'desc';

				return 0;
			} else if ((data == 'desc') && (a > b)) {
				this.paramName = 'asc';

				return 1;
			}

			return -1;
		});
		data = 'Name';
		this.updateStorage(data, this.paramName);

		return this.arraylocalStorage;
	}

	sortYear(data: string) {
		this.arraylocalStorage.sort((a: any, b: any) => {
			a = parseInt(a.year);
			b = parseInt(b.year);

			if (data == 'asc') {
				this.paramYear = 'desc';

				return a - b;
			} else if (data =='desc') {
				this.paramYear = 'asc';

				return b - a;
			}
		})
		data = 'Year';
		this.updateStorage(data, this.paramYear);

		
		return this.arraylocalStorage;
	}

	updateStorage(data, value): void {
		console.log(`param${data}`, value)	
		localStorage.setItem(`param${data}`, value);	
		localStorage.setItem('localStorageBooks', JSON.stringify(this.arraylocalStorage));		
	}

	delete(event: any) {
		this.details = JSON.parse(localStorage.getItem('localStorageBooks')).filter(function(e) {

		  return e.id !== event.id;
		});
		localStorage.setItem('localStorageBooks', JSON.stringify(this.details));

		this.arraylocalStorage = this.details;
		if (!this.arraylocalStorage.length) {
			localStorage.removeItem('localStorageBooks');
		}
	 }
	 
	 searchBookId(data: number) {

		return this.arraylocalStorage.filter(function(e) {
			if(e.id == data){

				return e;
			}
		}); 
 	 }	
}
