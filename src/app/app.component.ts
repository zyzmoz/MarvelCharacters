import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services/marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarvelCharacters';

  constructor(private marvelApiService : MarvelApiService){

  }

  async ngOnInit() {
    const data: any = await this.marvelApiService.fetchCharacters();   
    if (!data.error){
      console.log(data)
    }
    
  }
}
