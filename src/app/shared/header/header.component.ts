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
      this.pageTitle.set(this.router.url.substring(1))
      if (this.router.url == '/inicio') this.showBackButton.set(false)

      const pageTitleUnformatted = this.pageTitle()
      switch(pageTitleUnformatted) {
        case "inicio":
          this.pageTitle.set("início")
          break;
        case "solicitacoes":
          this.pageTitle.set("solicitações")
          break;
        case "clientes":
          this.pageTitle.set("clientes")
          break;
        case "graficos-de-energia":
          this.pageTitle.set("gráficos de energia")
          break;
        default:
          this.pageTitle.set("")
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
