import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HomeComponent } from '../home.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private fb: FormBuilder,
    private homeComponent: HomeComponent,
  ) { }

  ngOnInit() {

  }

  formCreate() {
    return new FormGroup({
      id: new FormControl(this.homeComponent.lastId()+1),
      name: new FormControl(), 
      authors: this.fb.array([ ]),
      year: new FormControl(),
      isbn: new FormControl('', Validators.required), 
      picture : new FormControl() 
    });
  }    
  
  formUpdate(data:any) {
    return new FormGroup({
      id: new FormControl(data[0].id),
      name: new FormControl(data[0].name), 
      authors: this.fb.array([...data[0].authors]),
      year: new FormControl(data[0].year),
      isbn: new FormControl(data[0].isbn, Validators.required), 
      picture : new FormControl() 
    });
  }  

  createAuthors(): FormGroup {
    
    return this.fb.group({
      name: '',
      surname: '',
      trackingId: this.generateUniqueId()
    });
  }

  trackByFn(index: number, item: any) {
    return item.trackingId;
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  
}
