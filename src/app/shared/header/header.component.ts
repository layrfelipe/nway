import { Location } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { Event, Router } from '@angular/router';

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
        case "inicio/notificacoes":
          this.pageTitle.set("notificações")
          break;
        case "consulta-de-medicao":
          this.pageTitle.set("consulta de medição")
          break;
        case "webhooks":
          this.pageTitle.set("webhooks")
          break;
        case "perfil":
          this.pageTitle.set("perfil")
          break;
        case "configuracoes":
          this.pageTitle.set("configuracoes")
          break;
        case "financeiro":
          this.pageTitle.set("financeiro")
          break;
        case "logs":
          this.pageTitle.set("log explorer")
          break;
        default:
          this.pageTitle.set("")
      }
    })
  }

  back() {
    this.location.back()
  }

  goToHomePage() {
    this.router.navigate(['inicio'])
  }
    
  ngOnDestroy() {
      this.routerSubscription?.unsubscribe()        
  }
}
