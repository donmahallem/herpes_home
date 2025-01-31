import { TestBed } from '@angular/core/testing';
import { HassHomeComponent } from './hass-home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HassHomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HassHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'herpes_home' title`, () => {
    const fixture = TestBed.createComponent(HassHomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('herpes_home');
  });
});
