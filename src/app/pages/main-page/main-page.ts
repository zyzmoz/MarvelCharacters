import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css']
})
export class MainPage implements OnInit {
  loading: boolean = true;
  error: string = null;
  characters: any[] = [];

  constructor(private marvelApiService: MarvelApiService) { }

  async ngOnInit() {
    //Verify if the list of characters exists
    if (!this.marvelApiService.characters) {
      //if list isn't already available, fetch character list
      const data: any = await this.marvelApiService.fetchCharacters();

      if (!data.error) {
        this.error = null;
        this.characters = data;
      } else {
        this.error = data.error;
        this.characters = [];
      }

      this.loading = false;
    } else {
      //if list is available copy data to this.
      this.characters = this.marvelApiService.characters;
      this.loading = false;
    }
  }

}
