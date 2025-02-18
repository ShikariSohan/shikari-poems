// src/app/book/book.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookPage } from './types';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly pages: BookPage[] = [
    { route: '/cover', label: 'Cover' },
    { route: '/page1', label: 'Page 1' },
    { route: '/page2', label: 'Page 2' },
    { route: '/end',   label: 'End' }
  ];

  constructor(private router: Router) {}

  getPageInfo(route: string) {
    const currentIndex = this.pages.findIndex(
      page => page.route === route || page.route === '/' + route
    );

    return {
      currentPage: this.pages[currentIndex],
      nextPage: currentIndex < this.pages.length - 1 ? this.pages[currentIndex + 1] : null,
      previousPage: currentIndex > 0 ? this.pages[currentIndex - 1] : null
    };
  }

  async navigate(page: BookPage) {
    await this.router.navigateByUrl(page.route);
  }
}
