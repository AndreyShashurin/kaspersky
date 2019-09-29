import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { HomeComponent } from '../home.component';
import { FormService } from '../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  file: any;
  patch: any;
  
  constructor(
    private router: Router,
    private homeComponent: HomeComponent,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.addForm = this.formService.formCreate();
  }

  addAuthor() {
    (this.addForm.get('authors') as FormArray).push(this.formService.createAuthors());
  }

  onChange(event): void  {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.patch = reader.result;
      }
    }
  }
  
  save(): void {
    this.addForm.value.picture = this.patch;
    this.homeComponent.arraylocalStorage.push(this.addForm.value);
    localStorage.setItem("localStorageBooks",JSON.stringify(this.homeComponent.arraylocalStorage));
    
		this.router.navigate(['/']);
  }
}
