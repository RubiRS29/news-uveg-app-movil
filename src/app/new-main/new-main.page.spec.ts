import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NewMainPage } from './new-main.page';


describe('NewMainPage', () => {
  let component: NewMainPage;
  let fixture: ComponentFixture<NewMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMainPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
