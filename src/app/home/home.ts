import {HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {HousingService} from '../housingService';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// j'envoie avec les crochet, je recoi avec parntheses

// enter emballer notre inputt dans un form

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatButtonModule, HousingLocation, MatInputModule, MatFormFieldModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  currentFilter = '';

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocationInfo[] = [];


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
    if (text === '') {
      // ne pas injecter de param si vide
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {}
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { city: text } ///////////////////////////////////////////////////////// soit la valeur soit null pour pas qui soit la
      });
    }
  }

  reset() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {} /////////////////////////// recherche a vide pour réinitiliser (utilise la mécanique de navigate)
    });
  }

  //readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  // housingLocation: HousingLocationInfo = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };

housingLocationList: HousingLocationInfo[] = [
    // {
    //   id: 0,
    //   name: 'Acme Fresh Start Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    //   availableUnits: 4,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 1,
    //   name: 'A113 Transitional Housing',
    //   city: 'Santa Monica',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    //   availableUnits: 0,
    //   wifi: false,
    //   laundry: true,
    // },
    // {
    //   id: 2,
    //   name: 'Warm Beds Housing Support',
    //   city: 'Juneau',
    //   state: 'AK',
    //   photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    //   availableUnits: 1,
    //   wifi: false,
    //   laundry: false,
    // },
    // {
    //   id: 3,
    //   name: 'Homesteady Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false,
    // },
    // {
    //   id: 4,
    //   name: 'Happy Homes Group',
    //   city: 'Gary',
    //   state: 'IN',
    //   photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false,
    // },
    // {
    //   id: 5,
    //   name: 'Hopeful Apartment Group',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 6,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    //   availableUnits: 5,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 7,
    //   name: 'Hopeful Housing Solutions',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 8,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
    //   availableUnits: 10,
    //   wifi: false,
    //   laundry: false,
    // },
    // {
    //   id: 9,
    //   name: 'Capital Safe Towns',
    //   city: 'Portland',
    //   state: 'OR',
    //   photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true,
    // },
  ];
}
