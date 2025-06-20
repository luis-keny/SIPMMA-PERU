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


   menuVisible = true;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
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