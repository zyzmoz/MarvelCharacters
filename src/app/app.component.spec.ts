import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { CharacterPage } from './pages/character-page/character-page';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,        
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    inject([HttpClient], (HttpClient) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.querySelector('.root')).toBeTruthy();
    });
  });  
});
