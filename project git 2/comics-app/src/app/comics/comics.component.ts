import { Component, OnInit, DoCheck } from '@angular/core';
import { Response } from '@angular/http';
import { CachedService } from '../services/cached.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit, DoCheck {
  comicsList: {}[];
  // comicsArr: {}[];
  data: any;
  constructor(private cache: CachedService) {
    this.cache.getComics();
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.comicsList = this.cache.comicsArr;
  }
}
