import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Destination } from '../models/destination.model';
import { LanguageEnum } from 'src/app/core/enums/language.enum';

const MOCK_DESTINATIONS_EN: Destination[] = [
  {
    name: 'Yellowstone National Park',
    description: 'Description of Yellowstone National Park',
    imageUrl: 'https://s39023.pcdn.co/wp-content/uploads/2021/06/Best-Things-To-Do-In-Yellowstone-National-Park-Morning-Glory-Pool.jpg.optimal.jpg',
    rating: 4.5,
    category: 'nationalparks',
  },
  {
    name: 'Grand Canyon National Park',
    description: 'Description of Grand Canyon National Park',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/utahddm/_24b349e3-7164-48e9-a55c-67db376e0e0f.aa89988589.jpg',
    rating: 4.0,
    category: 'nationalparks',
  },
  {
    name: 'Nou Camp',
    description: 'FC Barcelona stadium',
    imageUrl:
      'https://www.fcbarcelona.com/fcbarcelona/photo/2020/02/24/3f1215ed-07e8-47ef-b2c7-8a519f65b9cd/mini_UP3_20200105_FCB_VIS_View_1a_Empty.jpg',
    rating: 4.5,
    category: 'stadiums',
  }
];

const MOCK_DESTINATIONS_AR: Destination[] = [
  {
    name: 'منتزه يلوستون الوطنى',
    description: 'وصف حديقة يلوستون الوطنية',
    imageUrl: 'https://s39023.pcdn.co/wp-content/uploads/2021/06/Best-Things-To-Do-In-Yellowstone-National-Park-Morning-Glory-Pool.jpg.optimal.jpg',
    rating: 4.5,
    category: 'nationalparks',
  },
  {
    name: 'منتزه غراند كانيون الوطني',
    description: 'وصف منتزه جراند كانيون الوطني',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/utahddm/_24b349e3-7164-48e9-a55c-67db376e0e0f.aa89988589.jpg',
    rating: 4.0,
    category: 'nationalparks',
  },

  {
    name: 'نو كامب',
    description: 'ملعب نادي برشلونة',
    imageUrl:
      'https://www.fcbarcelona.com/fcbarcelona/photo/2020/02/24/3f1215ed-07e8-47ef-b2c7-8a519f65b9cd/mini_UP3_20200105_FCB_VIS_View_1a_Empty.jpg',
    rating: 4.5,
    category: 'stadiums',
  }
];

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  getDestinations(keyword: string | null, language: string): Observable<Destination[]> {
    const data = language === LanguageEnum.ENGLISH ? MOCK_DESTINATIONS_EN : MOCK_DESTINATIONS_AR;
    const destinations$ = of(data);

    if (!keyword) {
      return destinations$;
    }

    return destinations$.pipe(map(items => items.filter(item => item.name.toLowerCase().includes(keyword))));
  }

}
