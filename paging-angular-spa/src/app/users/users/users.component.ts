import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { PageResult } from 'src/app/models/PageResult';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public User: User[];
  public pageNumber: number = 1;
  public Count: number;
  baseUrl: string="https://localhost:44306/";
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.get()
  }

  get() {
    this.http.get<PageResult<User>>(this.baseUrl + 'api/users').subscribe(result => {
      this.User = result.items;
      this.pageNumber = result.pageIndex;
      this.Count = result.count;
    }, error => console.error(error));
  }

  public onPageChange = (pageNumber) => {
    this.http.get<PageResult<User>>(this.baseUrl + 'api/users?page=' + pageNumber).subscribe(result => {
      this.User = result.items;
      this.pageNumber = result.pageIndex;
      this.Count = result.count;
    }, error => console.error(error));
  }

}
