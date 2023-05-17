import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageEnum } from '../enums/language.enum';
import { DirectionEnum } from '../enums/direction.enum';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private availableLanguages: string[] = [
    LanguageEnum.ENGLISH,
    LanguageEnum.ARABIC
  ]
  private layoutDirection: string = DirectionEnum.LEFT_TO_RIGHT;

  private currentLanguageSubject = new BehaviorSubject<string>(LanguageEnum.ENGLISH);
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }

  getLayoutDirection(): string {
    return this.layoutDirection;
  }

  setLayoutDirection(dir: string): void {
    this.layoutDirection = dir;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
  }
}
