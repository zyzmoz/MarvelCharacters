import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private apiKey = 'a8108b4493410142cf3a9bd98cd11938';
  private apiURL = 'https://gateway.marvel.com:443/v1/public/';
  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  fetchCharacters = async () => {
    const response: any = await this.httpClient.get(`${this.apiURL}characters?apikey=${this.apiKey}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);

    if (response && response.code === 200) {
      //I could have used  &limit parameter but the paper says to use as it is here
      return response.data.results.slice(0, 10);
    }

    return { error: response.error.message }
  }
}
