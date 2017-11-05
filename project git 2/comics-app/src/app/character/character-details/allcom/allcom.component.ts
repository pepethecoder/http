import { Component, OnInit, DoCheck } from '@angular/core';
import { CachedService } from '../../../services/cached.service';

@Component({
  selector: 'app-allcom',
  templateUrl: './allcom.component.html',
  styleUrls: ['./allcom.component.css'],
  providers: [CachedService]
})
export class AllcomComponent implements OnInit, DoCheck {

  allcm: any;
  constructor(private dt: CachedService) { }

  ngOnInit() {
    this.dt.getAllCom();
  }

  ngDoCheck() {
    this.allcm = this.dt.allComLst;
  }
}
