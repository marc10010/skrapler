import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../types/api';

@Injectable({
    providedIn: 'root'
  })
  export class ApiMongo {

    constructor(
      private http: HttpClient
      
    ) { }
    
    //LLamadas a la api apartir de aqui

    getBlackList(){
      return this.http.get<any>('http://localhost:3000/blacklist',
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }
    addBlacklistedWord(word: any){
      return this.http.get<any>('http://localhost:3000/blacklist/add/' + word,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }

    deleteBlacklistedWord(word: any){
      return this.http.get<any>('http://localhost:3000/blacklist/delete/' + word,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }

    getWhiteList(){
      return this.http.get<any>('http://localhost:3000/whitelist', 
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });   
    }

    addWhitelistedWord(word: any){
      return this.http.get<any[]>('http://localhost:3000/whitelist/add/type/' + word,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }

    deleteWhiteListedWord(type: any, word: any){
      return this.http.get<any[]>('http://localhost:3000/whitelist/delete/type/'+ type+'/words/' + word,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }
    
    addWhiteListedTypeWord(type: any, word: any){
      return this.http.get<any[]>('http://localhost:3000/whitelist/add/type/'+ type+'/words/' + word,
      { headers: {'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET'}
        });
    }
    

  }  