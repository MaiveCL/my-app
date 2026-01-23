import {Component, input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import {RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-housing-location',
   imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
   housingLocation = input.required<HousingLocationInfo>();
}
