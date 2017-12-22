import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  votes: number;
  title: string;
  link: string;

  constructor() {
    this.votes = 10;
    this.title = "Angular 4";
    this.link = "http://angular.io";
  }

  ngOnInit() {

  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }
}
