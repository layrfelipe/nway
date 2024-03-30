import { Component, OnDestroy, signal } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnDestroy {
  protected showHeader = signal<boolean>(true)
  private routerSubscription;

  constructor(
    private router: Router
  ) {
    this.routerSubscription = this.router.events.subscribe((ev: Event) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url == '/login' || ev.urlAfterRedirects == '/login') {
          this.showHeader.set(false)
        }
        else {
          this.showHeader.set(true)
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe()
  }
}
