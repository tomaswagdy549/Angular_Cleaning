import { Injectable } from '@angular/core';// translation.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject: BehaviorSubject<string>;
  public currentLanguage: Observable<string>;

  constructor(private http: HttpClient) {
    // Initialize with default language
    this.currentLanguageSubject = new BehaviorSubject<string>('en');
    this.currentLanguage = this.currentLanguageSubject.asObservable();
  }

  public switchLanguage(language: string): void {
    // Update current language
    this.currentLanguageSubject.next(language);

    // Load translation file for the selected language
    this.loadTranslation(language).subscribe(
      () => {
        console.log(`Translation file for ${language} loaded successfully.`);
      },
      (error) => {
        console.error(`Error loading translation file for ${language}: ${error}`);
      }
    );
  }

  private loadTranslation(language: string): Observable<any> {
    // Assuming translation files are stored in src/assets/i18n
    const translationFilePath = `./assets/i18n/messages.${language}.json`;
    return this.http.get(translationFilePath);
  }
}
