import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/services/marvel-api.service';


@Component({
  selector: 'app-character',
  templateUrl: './character-page.html',
  styleUrls: ['./character-page.css']
})
export class CharacterPage implements OnInit {
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
    
  loading: boolean = true;
  character: any = {};
  error: string = null;

  constructor(
    private route: ActivatedRoute,
    private marvelApiService: MarvelApiService    
  ) { }

  async ngOnInit() {       
    //Get slug from url
    this.route.params.subscribe(async res => {
      //fetch character details
      const data = await this.marvelApiService.fetchCharacterDetails(res.id);
      if (data && !data.error) {
        this.character = data;
        //Load image into a canvas
        this.loadImage(this.character.thumbnail);
        this.error = null;        
      } else {
        this.error = data.error;
        this.character = {}
      }
      //set ready
      this.loading = false;
    });
  }

  //render image into a canvas
  private loadImage = (thumbnail) => {    
    const { path, extension } = thumbnail;    
    const image = new Image();
    image.src = `${path}.${extension}`;    

    image.onload = () => {
      console.log(image.src);
      this.canvas.nativeElement.width = image.width;
      this.canvas.nativeElement.height = image.height;
      const ctx = this.canvas.nativeElement.getContext('2d');      
      ctx.clearRect(0,0,300,300)           
      ctx.drawImage(image,0,0);
      
    }
  }

}
