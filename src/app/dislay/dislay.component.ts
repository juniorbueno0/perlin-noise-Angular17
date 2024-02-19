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

  noiseSmall:number[] = [];
  noiseSmall2:number[] = [];

  constructor(){
    this.noiseArray = perlin.generatePerlinNoise(20, 20,{
      octaveCount: 4, // Set the octave count
      amplitude: 0.1, // Set the amplitude
      persistence: 0.2, // Set the persistence
    });
    this.noiseSmall = perlin.generatePerlinNoise(2,1,{ octaveCount: 4, amplitude: 0.1, persistence: 0.2 });
    this.noiseSmall2 = perlin.generatePerlinNoise(2,1,{ octaveCount: 4, amplitude: 0.1, persistence: 0.2 });
  }

  ngOnInit(): void {
    console.log(this.noiseSmall);
  }

  noiseMovement():void {
    for(let i=0;i<this.noiseArray.length;i++){
      let randomNumber = Math.random();
      let scaledNumber = randomNumber * 0.005;
      let finalNumber = scaledNumber + 0.01;
      console.log(this.noiseArray[i]+=finalNumber);
    }
  }

  noiseRow():void{
      for(let i=0;i<20;i++){
        this.noiseArray[i]-=0.1;
      }
  }
}