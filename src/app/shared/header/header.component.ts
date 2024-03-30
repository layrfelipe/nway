import { Location } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnDestroy {

  private routerSubscription;
  protected pageTitle = signal<string>(this.router.url)
  protected showBackButton = signal<boolean>(true)

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.routerSubscription = this.router.events.subscribe((ev: Event) => {
      this.showBackButton.set(true)
      if (ev instanceof NavigationStart) {
        this.pageTitle.set(ev.url.substring(1))
      }
      else if (ev instanceof NavigationEnd) {
        this.pageTitle.set(ev.urlAfterRedirects.substring(1))
      }
      else if (ev instanceof Scroll) {
        this.pageTitle.set(ev.routerEvent.url.substring(1))
      }
      if (this.pageTitle() == 'inicio') this.showBackButton.set(false)

      const pageTitleUnformatted = this.pageTitle()
      switch(pageTitleUnformatted) {
        case 'inicio':
          this.pageTitle.set("início")
          break;
        case 'solicitacoes':
          this.pageTitle.set("solicitações")
      }
    })
  }

  back() {
    this.location.back()
  }
    
  ngOnDestroy() {
      this.routerSubscription?.unsubscribe()        
  }
}
