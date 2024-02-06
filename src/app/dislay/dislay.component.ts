import { Component, inject } from '@angular/core';
import { log } from 'console';
import * as perlin from 'perlin-noise'; 

@Component({
  selector: 'app-dislay',
  standalone: true,
  imports: [],
  templateUrl: './dislay.component.html',
  styles: ``
})
export class DislayComponent {
  noiseArray:number [] = [];
  
  constructor(){
    this.noiseArray = perlin.generatePerlinNoise(20, 20);
  }

  ngOnInit(): void {
    console.log(this.noiseArray);
  }
}


