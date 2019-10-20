import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private apiKey = 'a8108b4493410142cf3a9bd98cd11938';
  private apiURL = 'https://gateway.marvel.com:443/v1/public/';

  characters: any[];
  constructor(
    private httpClient: HttpClient
  ) {

  }
  
  //fetch Character list form Marvel API
  fetchCharacters = async () => {
    if (this.characters)
      return this.characters;

    const response: any = await this.httpClient.get(`${this.apiURL}characters?apikey=${this.apiKey}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);

    if (response && response.code === 200) {
      //I could have used  &limit parameter but the paper says to use as it is here
      this.characters = response.data.results.slice(0, 10);
      return this.characters;
    }

    return { error: response.error.message }
  }

  //fetch character details with given character id from API
  fetchCharacterDetails = async (characterId) => {    
    const response: any = await this.httpClient.get(`${this.apiURL}characters/${characterId}?apikey=${this.apiKey}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);
    console.log(response);
    if (response && response.code === 200)       
      return response.data.results[0];    

    return { error: response.error.message }

  }
}
