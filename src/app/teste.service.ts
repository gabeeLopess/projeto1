import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  nomes: String[]

  constructor(){
    this.nomes = ["Neymar", "Messi", "Vinijr"];
  }

  getNomes(): String[]{
    return this.nomes;
  }
}


