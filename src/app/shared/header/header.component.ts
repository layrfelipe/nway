import { Location } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { Event, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu,service';

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
    private location: Location,
    protected menuService: MenuService
  ) {
    this.routerSubscription = this.router.events.subscribe((ev: Event) => {
      this.showBackButton.set(true)
      this.pageTitle.set(this.router.url.substring(1))
      if (this.router.url == '/inicio') this.showBackButton.set(false)

      const pageTitleUnformatted = this.pageTitle()
      switch(pageTitleUnformatted) {
        case "inicio":
          this.pageTitle.set("Início")
          break;
        case "solicitacoes":
          this.pageTitle.set("Solicitações")
          break;
        case "clientes":
          this.pageTitle.set("Clientes")
          break;
        case "graficos-de-energia":
          this.pageTitle.set("Gráficos de energia")
          break;
        case "inicio/notificacoes":
          this.pageTitle.set("Notificações")
          break;
        case "consulta-de-medicao":
          this.pageTitle.set("Consulta de medição")
          break;
        case "webhooks":
          this.pageTitle.set("Webhooks")
          break;
        case "perfil":
          this.pageTitle.set("Perfil")
          break;
        case "configs":
          this.pageTitle.set("Configurações")
          break;
        case "financeiro":
          this.pageTitle.set("Financeiro")
          break;
        case "logs":
          this.pageTitle.set("Log explorer")
          break;
        case "solicitacoes/status":
          this.pageTitle.set("Status da solicitação")
          break;
        case "clientes/cliente":
          this.pageTitle.set("Cliente")
          break;
        case "clientes/registro":
          this.pageTitle.set("Cadastro de novo cliente")
          break;
        case "consulta-de-medicao/cliente":
          this.pageTitle.set("Consulta de medição por cliente")
          break;
        case "solicitacoes/migracao":
          this.pageTitle.set("Solicitar migração")
          break;
        case "solicitacoes/cancelamento":
          this.pageTitle.set("Solicitar supensão de fornecimento")
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
    if (this.menuService.isOpen()) {
      this.menuService.closeMenu()
    }
    this.router.navigate(['inicio'])
  }

  toggleExpandMobileMenuState() {
    if (this.menuService.isOpen()) {
      this.menuService.closeMenu()
      return
    }
    this.menuService.openMenu()
  }
    
  ngOnDestroy() {
      this.routerSubscription?.unsubscribe()        
  }
}
