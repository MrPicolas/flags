import { SimpleChanges, Component, OnInit, Input } from '@angular/core';
import { FlagItemComponent } from '../flag-item/flag-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flag-list',
  standalone: true,
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss'],
  imports: [CommonModule, FlagItemComponent],
})
export class FlagListComponent implements OnInit {
  flags: any[] = [];
  errorMessage: string | null = null; 
  
  @Input() isDarkTheme: boolean = false;
  
  constructor() {}

  ngOnInit() {
    console.log('fetchFlags chamado');
    this.fetchFlags();
  }

  async fetchFlags() {
    try {
      const response = await fetch('assets/flags.json'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.flags = data; 
      console.log('Bandeiras carregadas:', this.flags); 
    } catch (error) {
      console.error('Erro ao carregar as bandeiras:', error);
      this.errorMessage = 'Erro ao carregar as bandeiras. Tente novamente mais tarde.'; 
    }
  }

  expandedFlagIndex: number | null = null;

  toggleFlag(index: number) {
    this.expandedFlagIndex = this.expandedFlagIndex === index ? null : index;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDarkTheme']) {
      console.log('isDarkTheme atualizado:', this.isDarkTheme); // Verifica o valor atualizado
    }
  }
}
