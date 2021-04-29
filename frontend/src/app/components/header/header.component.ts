import { Component, OnInit } from '@angular/core';
import { HostListener} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import menuOptions from '../../../assets/constants/menuOptions';
import { Movie } from 'src/app/models/movies.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOptions = menuOptions;

  selectedOption = 'Inicio';

  showMenu = false;

  movies$: Observable<Movie> | undefined

  onSelect(option: string): void{
    this.selectedOption = option;
  }

  toggle(): void {
    this.showMenu =  !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset <= 50) {
        document.querySelector('header')?.classList.add('background--transparent');

    } else {
        document.querySelector('header')?.classList.remove('background--transparent');
    }
}
}
