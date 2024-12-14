import { Component, input } from '@angular/core';
import { TestRepoItem } from '../../services/repos.service';

@Component({
  selector: 'app-repo-list',
  imports: [],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css',
})
export class RepoListComponent {
  repos = input<TestRepoItem[]>([]);
}
