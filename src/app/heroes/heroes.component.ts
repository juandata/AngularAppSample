import { Component, OnInit } from '@angular/core';//import the Component symbol from the Angular core library
import {Hero} from '../Hero';
@Component({ //annotate the component class with @
  // metadata properties:
  selector: 'app-heroes', //The CSS element selector, 'app-heroes'
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: 'Juan David'
  };

  constructor() { }

  ngOnInit() { //The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component.
  }

}
