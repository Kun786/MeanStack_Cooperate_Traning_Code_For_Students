import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatBoxComponent } from './user-chat-box.component';

describe('UserChatBoxComponent', () => {
  let component: UserChatBoxComponent;
  let fixture: ComponentFixture<UserChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChatBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
