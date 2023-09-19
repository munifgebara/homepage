import { Component, OnInit } from '@angular/core';
import { GithubService, IRepository } from '../git-hub.service';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit{

protected repos:IRepository[]=[];

  constructor(protected gitHubService:GithubService ){

  }
  ngOnInit(): void {
    this.gitHubService.listRepositories().subscribe({
      next:(value:IRepository[])=>{
        this.repos=value.filter(r=>r.description!=null);
      }
    });
  }
}




