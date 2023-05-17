import { Component, OnInit, inject } from '@angular/core';
import { DestinationService } from './services/destination.service';
import { Observable, map, of } from 'rxjs';
import { Destination } from './models/destination.model';
import { LocaleService } from 'src/app/core/services/locale.service';
import { LanguageEnum } from 'src/app/core/enums/language.enum';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
  private destinationService = inject(DestinationService);
  private localeService = inject(LocaleService);

  private destinations$ = this.destinationService.getDestinations(null, LanguageEnum.ENGLISH);

  nationalparks$: Observable<Destination[]> = of([]);
  museums$: Observable<Destination[]> = of([]);
  stadiums$: Observable<Destination[]> = of([]);


  ngOnInit(): void {
    this.initCategories();
    this.localeService.currentLanguage$.subscribe(lang => {
      this.destinations$ = this.destinationService.getDestinations(null, lang);
      this.initCategories();
    })
  }

  private initCategories(): void {
    this.nationalparks$ = this.destinations$.pipe(map(items => items.filter(item => item.category === 'nationalparks')));
    this.museums$ = this.destinations$.pipe(map(items => items.filter(item => item.category === 'museums')));
    this.stadiums$ = this.destinations$.pipe(map(items => items.filter(item => item.category === 'stadiums')));

  }

  onSearchChange(event: any): void {
    const keyword = event.target.value.toLowerCase().trim();
    this.localeService.currentLanguage$.subscribe(lang => {
      this.destinations$ = this.destinationService.getDestinations(keyword, lang);
      this.initCategories();
    })
  }
}
