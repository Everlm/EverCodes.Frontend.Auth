import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';

/**
 * Servicio base para HTTP con manejo de errores centralizado
 * Todos los servicios de features deben extender de este
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  /**
   * GET request con manejo de errores
   */
  get<T>(endpoint: string): Observable<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;

    return this.http.get<T>(url).pipe(
      retry(API_CONFIG.RETRY_COUNT),
      catchError(this.handleError)
    );
  }

  /**
   * POST request con manejo de errores
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;

    return this.http.post<T>(url, data).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * PUT request con manejo de errores
   */
  put<T>(endpoint: string, data: any): Observable<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;

    return this.http.put<T>(url, data).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * DELETE request con manejo de errores
   */
  delete<T>(endpoint: string): Observable<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;

    return this.http.delete<T>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Manejo centralizado de errores HTTP
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Algo salió mal. Intenta nuevamente.';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      switch (error.status) {
        case 400:
          errorMessage = 'Solicitud incorrecta';
          break;
        case 401:
          errorMessage = 'No autorizado';
          break;
        case 403:
          errorMessage = 'Acceso prohibido';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }

    console.error('HTTP Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}
