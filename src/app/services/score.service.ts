import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://livescore6.p.rapidapi.com/matches/v2/list-by-date';
  private apiKey = '92b7b2b8fdmsh9fd4559492136dfp1b08b8jsn6b923031a99c';

  getMatches(date: string, category: string): Observable<any>{
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    });
    const params = {
      Category: category,
      Date: date,
      Timezone: '+5.30'
    };
    return 	this.http.get(`${this.apiUrl}`,{headers ,params});
  }
}
