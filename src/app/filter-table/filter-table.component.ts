import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { User } from './models';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css'],
})
export class FilterTableComponent implements OnInit {
  users: User[];
  loading: boolean;
  eventoTabla: LazyLoadEvent;

  constructor(private _us: UsersService) {}

  ngOnInit() {
  }

  buildRequestUsers(
    skip: number,
    sortField?: string,
    sortOrder?: number,
    filters?: any
  ) {
    //this.request.skip = skip;
    this.loading = true;
    this._us.getUsers(skip, sortField, sortOrder, filters).subscribe((res) => {
      console.log(res);
      this.users = res;
      this.loading = false;
    });
  }

  onLazyLoad(e: LazyLoadEvent) {
    this.eventoTabla = e;
    const sortField = e.sortField ?? 'name';
    this.buildRequestUsers(e.first, sortField, e.sortOrder, e.filters);
  }
}
