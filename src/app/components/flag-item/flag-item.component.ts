import {ChangeDetectionStrategy ,SimpleChanges ,Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@services/theme.service'; 

@Component({
  selector: 'app-flag-item',
  standalone: true,
  templateUrl: './flag-item.component.html',
  styleUrls: ['./flag-item.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagItemComponent implements OnInit, OnChanges {

  constructor(public elementRef: ElementRef) {}
  
  @ViewChild('nameFlag') nameFlag!: ElementRef;

  @Input() isDarkTheme = false;
  @Input() flag!: { name: string; imageUrl: string };
  @Input() isExpanded = false;
  //@Input() themeChanged = EventEmitter
  @Output() flagClicked = new EventEmitter<string>();

  onClick(event: MouseEvent) {
    console.log(this.flag.name);
    this.isExpanded = !this.isExpanded;
    document.body.classList.toggle('flag-details', this.isExpanded)  
  }

  ngOnInit() {
    console.log('isDarkTheme recebido:', this.isDarkTheme);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDarkTheme'] && !changes['isDarkTheme'].isFirstChange()) {
      const previousValue = changes['isDarkTheme'].previousValue;
      const currentValue = changes['isDarkTheme'].currentValue;
      if (previousValue !== currentValue) {
        console.log('isDarkTheme atualizado:', currentValue);
      }
    }
  }

    onThemeChanged(isDark: boolean) {
      this.isDarkTheme = isDark;
      console.log('Tema propagado para o ItemComponent:', this.isDarkTheme);
    }
  }
  


