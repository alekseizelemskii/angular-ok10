import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../services/get-user.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: UserModel[] , search: string = ''): UserModel[] {
    if (!search.trim()){
      return users;
    }
    return users.filter (u => {
      return u.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
