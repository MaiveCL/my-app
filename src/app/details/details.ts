import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housingService';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: HousingLocationInfo | undefined;
  constructor() {
    // POUR NE PAS AVOIR LE ID A -1 DAns l'affichage test
    // this.housingLocationId = Number(this.route.snapshot.params['id']);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
