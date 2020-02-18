import { 
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument 
  } from '@angular/fire/firestore';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracaoService {
  configuracaoCollection: AngularFirestoreCollection<Configuracao>;
  configuracoes: Observable<Configuracao[]>;
  configuracoesDoc: AngularFirestoreDocument<Configuracao>;

  constructor(public afs:AngularFirestore) {
    this.configuracaoCollection = this.afs.collection('configuracao',ref => ref.orderBy('nome'));
     //this.tasks = this.afs.collection('tasks').valueChanges();
     this.configuracoes = this.configuracaoCollection.snapshotChanges().pipe(map(changes => {
       return changes.map(a => {
         const data = a.payload.doc.data() as Configuracao;
         data.uuid = a.payload.doc.id;
         return data;
       });
     }));
  }

  get() {
    return this.configuracoes; 
  }

  add(configuracao: Configuracao): Promise<any>{
    return this.configuracaoCollection.add(configuracao);
  }

  delete(configuracao: Configuracao): Promise<any> {
    this.configuracoesDoc = this.afs.doc(`configuracao/${configuracao.uuid}`);
    return this.configuracoesDoc.delete();
  }

  update(configuracao: Configuracao): Promise<any> {
    this.configuracoesDoc = this.afs.doc(`configuracao/${configuracao.uuid}`);
    return this.configuracoesDoc.update(configuracao);
  }
}