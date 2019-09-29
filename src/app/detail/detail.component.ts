import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  param: number;
  book: any;
  constructor(
    private route: ActivatedRoute,
    private homeComponent: HomeComponent
    ) {
  }

  ngOnInit() {
    this.param = this.route.snapshot.params['id'];
    this.book = this.homeComponent.searchBookId(this.param);
  }
}
