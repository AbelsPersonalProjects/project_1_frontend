import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  creator:string = 'Abel Asres';
  gitHub:string = 'https://github.com/AbelsPersonalProjects/project_1_frontend';
  @Input() appName = '';

}
