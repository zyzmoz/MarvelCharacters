import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CharacterPage } from './character-page';

import { ActivatedRoute } from '@angular/router';
import 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutes } from 'src/app/routing';


describe('CharacterPage', () => {
  let component: CharacterPage;
  let fixture: ComponentFixture<CharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterPage],
      imports: [HttpClientModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: {
            subscribe: (fn: (value: any) => void) => fn({
              id: '0'
            })
          }
        }
      }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
    
  });
});
