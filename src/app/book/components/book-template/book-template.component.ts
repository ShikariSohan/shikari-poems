import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookConfig } from '../../types';

@Component({
  selector: 'app-book-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-template.component.html',
  styleUrls: ['./book-template.component.scss']
})
export class BookTemplateComponent {
  @Input() config?: BookConfig;
  @Input() hasPrevious: boolean = false;
  @Input() hasNext: boolean = false;
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrevious = new EventEmitter<void>();
} 