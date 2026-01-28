import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {HousingService} from '../../services/housingService';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from '../../models/housinglocation'; // INTERFACE

// j'envoie avec les crochet, je recoi avec parntheses
@Component({
  selector: 'app-home',
  imports: [FormsModule, MatButtonModule, HousingLocation, MatInputModule, MatFormFieldModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  router = inject(Router)
  private route = inject(ActivatedRoute);
  housingService = inject(HousingService);

  currentFilter = '';
  filteredLocationList: HousingLocationInfo[] = [];
  housingLocationList: HousingLocationInfo[] = [];

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {    
    // Charger les données UNE SEULE FOIS
    this.housingService.getAllHousingLocations().subscribe(data => {
      this.housingLocationList = data;
      this.filteredLocationList = data;
      this.filterResults(this.currentFilter);
      // Forcer la détection de changement
      this.changeDetectorRef.detectChanges();
    });

    // Lire le query param au chargement et aux changements
    this.route.queryParams.subscribe(params => {
      const city = params['city'] || '';
      this.currentFilter = city;
      this.filterResults(city);
    });
  }

  handleLocationClicked(id: number) {
    //console.log({ id })
    this.router.navigate(['/details', id])
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
