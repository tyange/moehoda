import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { ReposService, TestRepoItem } from '../../services/repos.service';

import { RepoListComponent } from '../../components/repo-list/repo-list.component';
import { DefaultLayoutComponent } from '../../layouts/default-layout/default-layout.component';

@Component({
  selector: 'app-main',
  imports: [AsyncPipe, RepoListComponent, DefaultLayoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  testRepos$!: Observable<TestRepoItem[]>;

  constructor(private repoService: ReposService) {}

  ngOnInit(): void {
    this.testRepos$ = this.repoService.getRepos();
  }
}
