import { Component, OnInit } from '@angular/core';
import menuOptions from './constants'

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  menuOptions = menuOptions;
  selectedOption = 'Inicio';

  onSelect(option: string):void{
    this.selectedOption = option
  }
  constructor() { }

  ngOnInit(): void {
  }

}
