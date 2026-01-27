// import {RouterLink} from '@angular/router';
// déplacement de la logique de navigation dans le home

import {Component, input, output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {HousingLocationInfo} from '../../models/housinglocation';

@Component({
  selector: 'app-housing-location',
   imports: [MatCardModule, MatButtonModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
  detailsClick = output<number>();

  handleClick() {
    this.detailsClick.emit(this.housingLocation().id)
  }
}
