import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [FormsModule, CommonModule, TranslateModule],
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  page: string = 'Home';
  isNavbarCollapsed: boolean = true;
  isLogged: boolean = false;
  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {
    this.authService.isLogged.subscribe(value=>{
      this.isLogged=value
    })
  }
  handleLogOut() {
    this.authService.handleLogOut();
  }
  ngOnInit(): void {
    this.detectCurrentRoute();
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  detectCurrentRoute(): void {
    const currentRoute = window.location.pathname;
    if (currentRoute.includes('Home')) {
      this.page = 'Home';
    } else if (currentRoute.includes('About')) {
      this.page = 'About';
    } else if (currentRoute.includes('Services')) {
      this.page = 'Services';
    }
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language',language)
  }
}
export class NavbarM {}
