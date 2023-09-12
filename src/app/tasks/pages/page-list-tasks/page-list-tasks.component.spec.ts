import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTasksComponent } from './page-list-tasks.component';

describe('PageListTasksComponent', () => {
  let component: PageListTasksComponent;
  let fixture: ComponentFixture<PageListTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
