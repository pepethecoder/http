import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class DataService {

  urlChar = 'https://gateway.marvel.com:443/v1/public/characters/';
  urlCom = 'https://gateway.marvel.com:443/v1/public/comics/';
  apiKey = '';
  charId: string;
  comicsId: string;

  constructor(private http: Http) { }
  // getChar(): Observable<any> {
  //   const characters = this.http.get('https://gateway.marvel.com:443/v1/public/characters?');
  //   const comics = this.http.get('https://gateway.marvel.com:443/v1/public/comics?');
  //   const characterDetail = this.http.get(`${this.urlChar}${this.charId}${this.apiKey}`);
  //   const comicsDetail = this.http.get(`${this.urlCom}${this.comicsId}${this.apiKey}`);
  //   return Observable.forkJoin([characters, comics, characterDetail, comicsDetail]);

  // }

  getChar(): Observable<any> {

    const Observables = [];
    Observables.push(this.http.get('https://gateway.marvel.com:443/v1/public/characters?'));
    Observables.push(this.http.get('https://gateway.marvel.com:443/v1/public/comics?'));

    if (this.charId) {
      Observables.push(this.http.get(`${this.urlChar}${this.charId}${this.apiKey}`));
      Observables.push(this.http.get(`${this.urlChar}${this.charId}/comics${this.apiKey}`));
    }
    if (this.comicsId) {
      Observables.push(this.http.get(`${this.urlCom}${this.comicsId}${this.apiKey}`));
      Observables.push(this.http.get(`${this.urlCom}${this.comicsId}/creators${this.apiKey}`));
    }
    console.log([Observable, Observable]);
    return Observable.forkJoin(Observables);
  }
}
