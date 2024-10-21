import { SimpleChanges ,Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@services/theme.service'; 

@Component({
  selector: 'app-flag-item',
  standalone: true,
  templateUrl: './flag-item.component.html',
  styleUrls: ['./flag-item.component.scss'],
  imports: [CommonModule],

})
export class FlagItemComponent implements OnInit, OnChanges {

  constructor(public elementRef: ElementRef) {}
  
  @ViewChild('nameFlag') nameFlag!: ElementRef;

  // constructor(private themeService: ThemeService) {
  //   this.themeService.isDarkTheme.subscribe(value => {
  //     this.isDarkTheme = value;
  //     this.toggleTheme();
  //   });
  // }

  @Input() isDarkTheme = false;
  @Input() flag!: { name: string; imageUrl: string };
  @Input() isExpanded = false;
  @Input() themeChanged = EventEmitter
  @Output() flagClicked = new EventEmitter<string>();
  // @Output() themeChanged = new EventEmitter<boolean>();



  onClick(event: MouseEvent) {
    console.log(this.flag.name);
    this.isExpanded = !this.isExpanded;
    document.body.classList.toggle('flag-details', this.isExpanded)  
  }

  ngOnInit() {
    console.log('isDarkTheme recebido:', this.isDarkTheme); // Verifica o valor recebido
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

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['isDarkTheme']) {
  //     console.log('isDarkTheme atualizado:', this.isDarkTheme); // Verifica o valor atualizado
  //     console.log('Tema recebido pelo FlagItemComponent:', this.isDarkTheme);

  //   }
  // }
    onThemeChanged(isDark: boolean) {
      this.isDarkTheme = isDark;
      console.log('Tema propagado para o AppComponent:', this.isDarkTheme);
  
    }
  }

  // toggleTheme() {
      
  //   this.isDarkTheme = !this.isDarkTheme;
  //   if (document.body.classList.contains('dark-theme')) {
  //     this.nameFlag.nativeElement.classList.toggle('flag-name-dark', this.isDarkTheme);
  //     console.log('ativou dark-theme para o nome da bandeira')
  //     }
  //     else {
  //       console.log('não ativou, o nome está escuro ainda.')
  //     }
  //   }
  


