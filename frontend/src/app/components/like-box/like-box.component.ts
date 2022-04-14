import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-box',
  templateUrl: './like-box.component.html',
  styleUrls: ['./like-box.component.scss']
})
export class LikeBoxComponent implements OnInit {

  mouseOverIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
