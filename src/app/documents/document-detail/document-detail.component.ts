import { Component, OnInit} from '@angular/core';
import{Document} from '../document.modle';
import { DocumentsService } from '../documents.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

  document: Document;
  id:string;
  nativeWindow: any;
  
  constructor(
    private documentService: DocumentsService,
    private windowRefService: WindRefService,
    private router: Router,
    private route:ActivatedRoute) { 
      this.nativeWindow = windowRefService.getNative();
    }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
          
            this.document = this.documentService.getDocument(this.id);
            console.log(this.document);
          }
        );
        
    }

    onView(){
      if (this.document.url){
        this.nativeWindow.open(this.document.url)
      }
    }

}
