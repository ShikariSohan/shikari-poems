import { Routes } from '@angular/router';
import { BookComponent } from './book/book/book.component';
import { CoverComponent } from './pages/cover/cover.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { EndComponent } from './pages/end/end.component';

export const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      { path: 'cover', component: CoverComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'end', component: EndComponent },
      { path: '', redirectTo: 'cover', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'cover' },
];
