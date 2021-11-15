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

    infoUser(username: any){
      return this.http.get<any>('http://localhost:3000/search/' + username,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }
    obtenerTweetsRetweets(username: any){
      return this.http.get<any>('http://localhost:3000/home_timeline/' + username,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }

    obtenerTweetsSinRetweets(username: any){
      return this.http.get<any>('http://localhost:3000/home_timeline_nort/' + username,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }

    obtenerTweetsComentarios(username: any){
      return this.http.get<any>('http://localhost:3000/home_timeline_with_replies_nort/' + username,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }

    obtenerTweetsComentariosRetweets(username: any){
      return this.http.get<any>('http://localhost:3000/home_timeline_with_replies/' + username,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }
  }  