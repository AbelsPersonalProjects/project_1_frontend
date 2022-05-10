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
  license:string = 'https://github.com/abelAsres/ExpenseReimbursementSystem';
  @Input() appName = '';

}
