import { Component, OnInit, DoCheck } from '@angular/core';
import { CachedService } from '../services/cached.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, DoCheck {
  charList: {}[];

  constructor(private char: CachedService) {
    this.char.getChar();
    console.log(this.charList);
  }

  ngOnInit() {
    console.log(this.charList);
  }

  ngDoCheck() {
    this.charList = this.char.charArr;
  }

}

