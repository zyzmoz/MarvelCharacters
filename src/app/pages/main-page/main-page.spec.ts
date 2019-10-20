import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainPage } from './main-page';
import { AppRoutes } from 'src/app/routing';
import { CharacterPage } from '../character-page/character-page';
import { HttpClientModule } from '@angular/common/http';


describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPage, CharacterPage],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(AppRoutes)],
      
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();    
  });  
});
