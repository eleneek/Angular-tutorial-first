import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
    private routeState: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeState.paramMap.subscribe((params) => {
      const articleId = +params.get('articleId');
      const article = this.newsService.getArticle(articleId);
      if (!article) {
        this.router.navigate(['error']);
      }
      this.article = article;
    });
  }

}
