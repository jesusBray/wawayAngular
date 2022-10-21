import { Component, OnInit } from '@angular/core';
import { EmpFilter } from '../emp-filter';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-emp',
  templateUrl: 'emp-list.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'table { min-width: 600px }',
  ]
})
export class EmpListComponent implements OnInit {
  displayedColumns = ['id','nombre','descripcion','actions'];
  filter = new EmpFilter();
  selectedEmp!: Emp;
  feedback: any = {};

  get empList(): Emp[] {
    return this.empService.empList;
  }

  constructor(private empService: EmpService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.empService.load(this.filter);
  }

  select(selected: Emp): void {
    this.selectedEmp = selected;
  }

  delete(emp: Emp): void {
    if (confirm('Are you sure?')) {
      this.empService.delete(emp).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
