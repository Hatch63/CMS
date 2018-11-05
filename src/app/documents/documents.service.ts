import { Injectable, EventEmitter } from '@angular/core';
import {Document} from './document.modle';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documentSelectedEvent = new EventEmitter<Document>();

  documentChangedEvent = new EventEmitter<Document[]>();

  documents: Document[] = [];

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(){
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    
    for(const document of this.documents){
      if(document.id === id){
        return document;
      }
    }
    return null;
   } 

}
