import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `<h1>{{title}}</h1><nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
  <a routerLink="/about">About</a>
</nav>`,
  styles: [
  ]
})
export class BannerComponent implements OnInit {
  title = 'sonnh'
  constructor() { }

  ngOnInit(): void {
  }

}
