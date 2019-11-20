import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article, RespuestaTopHeadlines } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];
  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.cargarNoticias();
  }

  loadData($event) {
    this.cargarNoticias($event);
  }

  private cargarNoticias(event?) {
    this.noticiasService.getTopHeadLines()
      .subscribe((noticias: RespuestaTopHeadlines) => {
        console.log(noticias);
        if ( !noticias.articles.length && event) {
          event.target.disabled = true;
          event.target.complete();
        }
        this.noticias.push(...noticias.articles);
        if (event) {
          event.target.complete();
        }
      });
  }
}
