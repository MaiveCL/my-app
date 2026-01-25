import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {HousingService} from '../housingService';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation'; // INTERFACE

// j'envoie avec les crochet, je recoi avec parntheses
@Component({
  selector: 'app-home',
  imports: [FormsModule, MatButtonModule, HousingLocation, MatInputModule, MatFormFieldModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  router = inject(Router)

  handleLocationClicked(id: number) {
    console.log({ id })
    this.router.navigate(['/details', id])
  }

  currentFilter = '';

  private readonly route = inject(ActivatedRoute);

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocationInfo[] = [];
  housingLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;

    this.filterResults(this.currentFilter);

    // Lire le query param au chargement
    this.route.queryParams.subscribe(params => {
      const city = params['city'] || '';
      this.currentFilter = city;
      this.filterResults(city);
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

  search(text: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        city: text || null
      }
    });
  }

  reset() {
    this.search('');
  }
}
