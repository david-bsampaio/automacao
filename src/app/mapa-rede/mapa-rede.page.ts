import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ConfiguracaoService } from '../service/configuracao.service';

@Component({
  selector: 'app-mapa-rede',
  templateUrl: './mapa-rede.page.html',
  styleUrls: ['./mapa-rede.page.scss'],
})


export class MapaRedePage implements OnInit {
  itemsCollection: AngularFirestoreCollection<Configuracao>;
  configuracoes: Observable<Configuracao[]>;
  infra = [
    {
      codigo: 1,
      nome: "Roteador 1",
      url: "http://rotnetgj.ddns.net:10175/",
      ligado: false
    },
    {
      codigo: 2,
      nome: "Roteador 2",
      url: "http://rotnetgj.ddns.net:10175/",
      ligado: true
    }];

  constructor(private http: HttpClient,
             private afs: AngularFirestore,
             private configuracaoService: ConfiguracaoService
             ) { }

    toggleStatus(item: any){
      if(!item.ligado){
        alert('Desligando ' + item.nome + ': ' + item.url);
        return this.http.get(item.url).pipe(
          catchError(this.handleError<any[]>('getSmartphone', [])));
      } else {
        alert('Ligando ' + item.nome + ': ' + item.url);
        return this.http.get(item.url);
      }
      
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.inicializaConfiguracoes();
  }

  ionViewDidLoad() {
    this.itemsCollection = this.afs.collection('configuracao');
    console.log('ionViewDidLoad Configuracao');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }

  inicializaConfiguracoes(){
    this.configuracoes = this.configuracaoService.get();
}
}
