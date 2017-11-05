import { Component, OnInit, DoCheck } from '@angular/core';
import { CachedService } from '../../../services/cached.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
  providers: [CachedService]
})
export class CreatorsComponent implements OnInit, DoCheck {

  crtrs: any;

  constructor(private dt: CachedService) { }

  ngOnInit() {
    this.dt.getAllCre();
  }

  ngDoCheck() {
    this.crtrs = this.dt.allCreLst;
    console.log(this.crtrs);
  }

}
