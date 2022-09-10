import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http_c: HttpClient) { }

  getAllCurrencySupported():Observable<any>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
    .pipe(
      map(res => {return res})
    )
  }


  getTrendingCurrency(currency:string):Observable<object>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
    .pipe(
      map(res => {return res})
    )
  }


  getAllSupportedCrypto(currency:string, ids:string, category:string, order:string, per_page:number, page:number, sparkline:boolean, price_change_percentage:string ):Observable<any>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/coins/markets?
    vs_currency=${currency}&order=${ids}&per_page=${per_page}&page=${page}&sparkline=${sparkline}`)
    .pipe(
      map(res => {return res})
    )
  }



  getDerivatives():Observable<any>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/derivatives`)
    .pipe(
      map(res => {return res})
    )
  }

  getAllDerivativesExchanges(order:string, per_page:number, page:number):Observable<any>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/derivatives/exchanges?order=${order}&per_page=${per_page}&page=${page}'`)
    .pipe(
      map(res => {return res})
    )
  }

  getAllIndexes(per_page:number, page:number):Observable<any>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/indexes?per_page=${per_page}&page=${page}'`)
    .pipe(
      map(res => {return res})
    )
  }

  getSearchCrypto(searchString:string):Observable<any>{
    return this.http_c.get(`https://api.coingecko.com/api/v3/search?query=${searchString}`)
    .pipe(
      map(res => {return res})
    )
  }


  


}
