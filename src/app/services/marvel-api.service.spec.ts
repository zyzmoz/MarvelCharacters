import { TestBed, async, inject } from '@angular/core/testing';

import { MarvelApiService } from './marvel-api.service';
import { HttpClientModule } from '@angular/common/http';


describe('MarvelApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [MarvelApiService]
  }));

  it('should be created', () => {
    const service: MarvelApiService = TestBed.get(MarvelApiService);
    expect(service).toBeTruthy();
  });

  it('should fetch data', () => 
    async(inject([MarvelApiService], (service : MarvelApiService) => {
      service.fetchCharacters().then(data => {
        expect(data.error).not.toBeTruthy();
        expect(data.length).toBe(10);
      });
    }))   
  );
});
