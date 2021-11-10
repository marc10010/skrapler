import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../types/api';

@Injectable({
    providedIn: 'root'
  })
  export class ApiTwitter {

    constructor(
      private http: HttpClient
      
    ) { }
    
  /*
    private mapResponseConvertFieldsToString(response: ApiResponse<any[]>, fieldsToConvertFromNumberToString: string[]) {
      return ({
        ...response, response: response.response.map((oferta: any) => {
          const obj = {
            ...oferta,
          }
          fieldsToConvertFromNumberToString.forEach(field => {
            if ((obj[field] === 0 || obj[field]) && !isNaN(obj[field])) {
              obj[field] = obj[field].toString();
            }
          });
          return obj;
        })
      })
    }
    */
    //LLamadas a la api apartir de aqui

    llamadaDePrueba(){
      
      console.log("voy");
      return this.http.get<any>('http://localhost:3000/api/tweet_header/barackobama',
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }
  }  