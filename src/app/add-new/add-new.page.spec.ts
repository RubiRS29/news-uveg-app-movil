import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AddNewPage } from './add-new.page';

describe('AddNewPage', () => {
  let component: AddNewPage;
  let fixture: ComponentFixture<AddNewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
