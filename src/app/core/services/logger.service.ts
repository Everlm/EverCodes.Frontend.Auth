import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../config/api.config';

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

/**
 * Servicio de logging centralizado
 * Controla qué logs se muestran según el entorno
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(level: LogLevel, message: string, ...args: any[]): void {
    if (!APP_CONFIG.FEATURES.LOGS) return;

    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    switch (level) {
      case 'info':
        console.info(prefix, message, ...args);
        break;
      case 'warn':
        console.warn(prefix, message, ...args);
        break;
      case 'error':
        console.error(prefix, message, ...args);
        break;
      case 'debug':
        console.debug(prefix, message, ...args);
        break;
    }
  }

  info(message: string, ...args: any[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log('error', message, ...args);
  }

  debug(message: string, ...args: any[]): void {
    this.log('debug', message, ...args);
  }
}
