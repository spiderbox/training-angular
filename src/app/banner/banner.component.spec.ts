import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { of } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/router-link-directive-stub';
import { createPublicKey } from 'crypto';


describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement
  let employeeService
  let getQuoteSpy
  let linkDes
  let routerLinks

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const heroServicespy = jasmine.createSpyObj('employeeService', ['getTestValue'])

    TestBed.configureTestingModule({
      declarations: [ BannerComponent , RouterLinkDirectiveStub],
      providers: [
        {
          provide: EmployeeService, useValue: heroServicespy,
        },
        {
          provide: Router, useValue: routerSpy 
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    let testQuote = 'Test Quote'
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1')
    fixture.detectChanges();
    employeeService = jasmine.createSpyObj('EmployeeService', ['getQuote'])

    getQuoteSpy = employeeService.getQuote.and.returnValue(of(testQuote))
    

    // get route 
    linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain banner works', () => {
  //   const bannerElement: HTMLElement = fixture.nativeElement
  //   expect(bannerElement.textContent).toContain('banner works!')
  // })

  it('should display different test title', () => {
    component.title = 'nhson'
    fixture.detectChanges()
    expect(h1.textContent).toContain('nhson')
  })
  it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
    const start = Date.now();
    tick(100);
    const end = Date.now();
    expect(end - start).toBe(100);
  }));

  it('check redirect', () => {
    console.log(routerLinks.length)
    expect(routerLinks.length).toBe(3, 'should have 3 routerLinks');
  })

});
