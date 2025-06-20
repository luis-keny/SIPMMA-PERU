import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  browserWidth: number;
  menuVisible = false;

  constructor() {
    this.browserWidth = window.innerWidth;
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.browserWidth = (event.target as Window).innerWidth;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.header__group--buttons') || target.closest('.header__logo-icon');
    if (!clickedInside) {
      this.menuVisible = false;
    }
  }
}