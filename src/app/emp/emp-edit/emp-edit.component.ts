import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'form { display: flex; flex-direction: column; min-width: 500px; }',
    'form > * { width: 100% }'
  ]
})
export class EmpEditComponent implements OnInit {

  id!: string;
  emp!: Emp;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmpService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Emp()); }
          return this.empService.findById(id);
        })
      )
      .subscribe({
        next: emp => {
          this.emp = emp;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.empService.save(this.emp).subscribe({
      next: emp => {
        this.emp = emp;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/emps']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/emps']);
  }
}
