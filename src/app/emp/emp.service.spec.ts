import { TestBed } from '@angular/core/testing';
import { EmpService } from './emp.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmpService', () => {
  let service: EmpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpService]
    });

    service = TestBed.get(EmpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
