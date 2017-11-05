import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CachedService } from '../../services/cached.service';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css'],
  providers: [CachedService]
})
export class ComicsDetailsComponent implements OnInit, DoCheck {

  comicsDtls;
  constructor(private route: ActivatedRoute, private comDl: CachedService, private router: Router) {

  }

  ngOnInit() {
    this.comDl.getComDe(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id']);
  }

  ngDoCheck() {
    this.comicsDtls = this.comDl.comDtls;
    console.log(this.comDl.comDtls);
  }

  onClick() {
      this.router.navigate(['creators'], {relativeTo: this.route});
  }
}
