import { Component, OnInit } from '@angular/core';
import { CardUser } from '@shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: CardUser[] = [
    {
    name: 'Andres Tellez',
    age: 27,
    description: 'Desarrollador',
    avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
    work: 'Proyect Manager'
    },
    {
    name: 'Camilo Sanchez',
    age: 27,
    description: 'Desarrollador',
    avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
    name: 'Hector Perez',
    age: 27,
    description: 'Desarrollador',
    avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
    name: 'Sandra Lopez',
    age: 27,
    description: 'Desarrollador',
    avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
