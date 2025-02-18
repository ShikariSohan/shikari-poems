import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { BookService } from '../book.service';
import { BookTemplateComponent } from '../components/book-template/book-template.component';
import { BookPage } from '../types';

@Component({
  selector: 'app-book',
  template: `
    <app-book-template
      [hasPrevious]="!!previousPage"
      [hasNext]="!!nextPage"
      (onNext)="goNext()"
      (onPrevious)="goPrevious()"
    >
      <router-outlet></router-outlet>
    </app-book-template>
  `,
  standalone: true,
  imports: [RouterOutlet, CommonModule, BookTemplateComponent],
})
export class BookComponent implements OnInit {
  nextPage: BookPage | null = null;
  previousPage: BookPage | null = null;

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    this.updateNavigation(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateNavigation(event.urlAfterRedirects);
      });
  }

  private updateNavigation(route: string) {
    const { nextPage, previousPage } = this.bookService.getPageInfo(route);
    this.nextPage = nextPage;
    this.previousPage = previousPage;
  }

  async goNext() {
    if (this.nextPage) await this.bookService.navigate(this.nextPage);
  }

  async goPrevious() {
    if (this.previousPage) await this.bookService.navigate(this.previousPage);
  }
}
