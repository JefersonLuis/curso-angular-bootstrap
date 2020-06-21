import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input()
  nota = 0;

  starwidth: number;

  ngOnChanges(): void {
    this.starwidth = (this.nota * 75) / 5;
  }
}
