import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {

  @Input() public thumbnail : any ;
  @Input() public title: any ;
  @Input() public caption: any ;
}
