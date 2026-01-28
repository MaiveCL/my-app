import { Injectable, inject } from '@angular/core';
import {HousingLocationInfo} from '../models/housinglocation';

import { MarthaRequestService } from '../services/martha';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private martha = inject(MarthaRequestService);

  getAllHousingLocations(): Observable<HousingLocationInfo[]> {
    return this.martha.select('select-locations', { email: null }).pipe(
      map(data => data || [])
    );
  }
  // getAllHousingLocations(): HousingLocationInfo[] {
  //   return this.housingLocationList;
  // }

  getHousingLocationById(id: number): Observable<HousingLocationInfo | null> {
    return this.martha.select('select-location', { id, email: null }).pipe(
      map(data => data && data.length > 0 ? data[0] : null)
    );
  }
  // getHousingLocationById(id: number): HousingLocationInfo | undefined {
  //   return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  // }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
