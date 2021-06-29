import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdviceService {

  private adviceURL = "https://api.adviceslip.com/"

  constructor(private http: HttpClient) { }

  getRandomAdvice(): Observable<any> {
    return this.http.get(this.adviceURL + "advice")
  }

  getAdviceById(id: number): Observable<any> {
    console.log(id)
    return this.http.get(this.adviceURL + "advice/" + id)
  }
}

export interface Advice {
  id: number;
  advice: string;
}
