import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  photoes = ['https://images.wallpaperscraft.com/image/background_spot_light_texture_50630_300x300.jpg',
              'https://gdefon.org/_ph/1/1/721444321.jpg',
              'https://www.looperman.com/media/avatars/lrg/looperman-avatar-01889081.jpg'];
  index = 0;
  size = 300;
  position = this.size;
  myTimeout = setInterval(() => this.onSlider(), 4000)
  onSlider(): void{
      if (this.position === this.size - this.size * (this.photoes.length - 1)){
        this.position = this.size;
        document.getElementById('' + this.index).style.backgroundColor = 'white';
        this.index = 0;
        document.getElementById('' + this.index).style.backgroundColor = 'black';
      }else{
        this.position -= this.size;
        document.getElementById('' + this.index).style.backgroundColor = 'white';
        this.index += 1;
        document.getElementById('' + this.index).style.backgroundColor = 'black';
      }
  }
  onSetPhoto(index): void{
    if (this.index < index){
      this.position -= this.size * (index - this.index);
      document.getElementById('' + this.index).style.backgroundColor = 'white';
      this.index = index;
      document.getElementById('' + this.index).style.backgroundColor = 'black';
      clearInterval(this.myTimeout);
      this.myTimeout = setInterval(() => this.onSlider(), 4000);
    } else if (this.index > index){
        this.position += this.size * (this.index - index);
        document.getElementById('' + this.index).style.backgroundColor = 'white';
        this.index = index;
        document.getElementById('' + this.index).style.backgroundColor = 'black';
        clearInterval(this.myTimeout);
        this.myTimeout = setInterval(() => this.onSlider(), 4000);
    }
  }
  ngAfterViewInit(): void {
    document.getElementById('0').style.backgroundColor = 'black';
  }
}
