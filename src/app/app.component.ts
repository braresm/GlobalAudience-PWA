import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './core/services/locale.service';
import { LanguageEnum } from './core/enums/language.enum';
import { DirectionEnum } from './core/enums/direction.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private translateService = inject(TranslateService);
  private localeService = inject(LocaleService);

  constructor() {
    this.translateService.addLangs(this.localeService.getAvailableLanguages());
    this.translateService.setDefaultLang(LanguageEnum.ENGLISH);
  }

  switchLang(lang: string) {
    // switch to the selected language
    this.translateService.use(lang);
    this.localeService.setCurrentLanguage(lang);

    // change layout direction based on the language
    const dir = lang == LanguageEnum.ARABIC ? DirectionEnum.RIGHT_TO_LEFT : DirectionEnum.LEFT_TO_RIGHT;
    this.localeService.setLayoutDirection(dir);

    // get the body element and change the value for dir attribute
    const body: HTMLBodyElement | null = document.querySelector('body[dir]');
    if (body) {
      body.dir = this.localeService.getLayoutDirection();
    }
  }
}
