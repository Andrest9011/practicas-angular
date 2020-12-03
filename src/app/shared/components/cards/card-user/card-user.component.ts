import { Component, OnInit, Input } from '@angular/core';
import { CardUser } from './card-user.metadata';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() data: CardUser;

  constructor() { }

  ngOnInit(): void {
  }

}
