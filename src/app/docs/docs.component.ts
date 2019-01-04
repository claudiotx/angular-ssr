import { Component, OnInit } from '@angular/core';

import { DocModel } from './doc.model';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  public docs: DocModel[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('getting docs');
    this.apiService.getDocs()
      .subscribe(data => {
        this.docs = data;
      },
        err => {
          console.error('Failed loading docs', err);
        });
  }

}
