import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CardModule, InputTextModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'PrimeNG Funcionando',
      detail: '¡Los componentes de PrimeNG están funcionando correctamente!'
    });
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Información',
      detail: 'Este es un mensaje informativo usando PrimeNG Toast'
    });
  }
}
