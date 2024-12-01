import { Component } from '@angular/core';
import { RepoListComponent } from '../../components/repo-list/repo-list.component';
import { DefaultLayoutComponent } from '../../layouts/default-layout/default-layout.component';

@Component({
  selector: 'app-main',
  imports: [RepoListComponent, DefaultLayoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
