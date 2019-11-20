import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  noticias: Article[] = [];
  categorias: string[] = [
    'business', 'entertainment', 'general', 'health',
    'science', 'sports', 'technology'
  ];
  constructor( private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambioCategoria($event) {
    this.noticias = [];
    this.cargarNoticias($event.detail.value);
  }

  private cargarNoticias(categoria: string, evento?) {
    this.noticiasService.getTopHeadlinesCategory(categoria)
      .subscribe( resp => {
        // console.log(resp);
        this.noticias.push(...resp.articles);
        if (evento) {
          evento.target.complete();
        }
      });
  }

  loadData($event) {
    this.cargarNoticias(this.segment.value, $event);
  }
}
