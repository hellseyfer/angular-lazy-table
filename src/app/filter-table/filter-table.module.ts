import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTableComponent } from './filter-table.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [CommonModule, HttpClientModule, TableModule],
  declarations: [FilterTableComponent, TableUsersComponent],
  exports: [FilterTableComponent],
})
export class FilterTableModule {}
