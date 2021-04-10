import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset <= 50) {
        document.querySelector('header')?.classList.add('background--transparent');

    } else {
        document.querySelector('header')?.classList.remove('background--transparent');
    }
}

}
