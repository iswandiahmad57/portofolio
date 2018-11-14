import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkJobComponent } from './work-job.component';

describe('WorkJobComponent', () => {
  let component: WorkJobComponent;
  let fixture: ComponentFixture<WorkJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
