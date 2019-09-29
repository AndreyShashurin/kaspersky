import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormArray } from '@angular/forms';
import { books } from '../services/interface.servise';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  message: string;
  param: number;
  addForm: FormGroup;
  book: books[];
  patch: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeComponent: HomeComponent,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.param = this.route.snapshot.params['id'];
    this.book = this.homeComponent.searchBookId(this.param);
    this.addForm = this.formService.formUpdate(this.book);
    this.messageChange(this.book[0].picture);
  }

  onChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.patch = reader.result;
        this.messageChange(this.patch);
      }
    }
  }

  messageChange(data: any) {
    this.message = data ? 'Изменить' : 'Добавить';
  }

  update(param: number): void {
    for (let arr of this.homeComponent.arraylocalStorage) {
        if (arr.id === param) {
            arr.name = this.addForm.get('name').value;
            arr.isbn = this.addForm.get('isbn').value;
            arr.authors = this.addForm.get('authors').value;
            arr.year = this.addForm.get('year').value;
            arr.picture = this.patch;
        }
    }
    localStorage.setItem("localStorageBooks",JSON.stringify(this.homeComponent.arraylocalStorage));

    this.router.navigate(['/']);
  }  
  
  addAuthor() {
    (this.addForm.get('authors') as FormArray).push(this.formService.createAuthors())
  }
}
