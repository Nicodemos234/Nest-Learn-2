import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: 'Nicodemos234',
      email: 'nicodemos54324@gmail.com',
      fullName: 'Nicodemos Souza',
      pass: '123',
      entryDate: new Date(),
    },
  ];

  public searchByName(username: string): User {
    return this.users.find((user) => user.username == username);
  }

  public create(user: User): User {
    this.users.push(user);
    return user;
  }
}
