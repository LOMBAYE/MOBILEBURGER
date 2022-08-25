import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
segment:string='list'
  constructor(private router:Router) {}

  login(){
    this.router.navigateByUrl('/catalogue');
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
