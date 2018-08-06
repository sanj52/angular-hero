import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  hero: Hero = {
    id: 12,
    name: 'Windstorm'
  };
 
}





