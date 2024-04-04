import { Component, OnDestroy, signal } from '@angular/core';
import { Router, Event } from '@angular/router';
import { MenuService } from 'src/app/services/menu,service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent {

  private routerSubscription;
  protected selectedMenuOption = signal<string>('/inicio')

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {
    this.routerSubscription = this.router.events.subscribe((ev: Event) => {
      const currentURL = this.router.url;
      switch(currentURL) {
        case '/inicio':
          this.selectedMenuOption.set("/inicio")
          break;
        case '/solicitacoes':
          this.selectedMenuOption.set("/solicitacoes")
          break;
        case '/clientes':
          this.selectedMenuOption.set("/clientes")
          break;
        case '/graficos-de-energia':
          this.selectedMenuOption.set("/graficos-de-energia")
          break;
        case '/consulta-de-medicao':
          this.selectedMenuOption.set("/consulta-de-medicao")
          break;
        case '/webhooks':
          this.selectedMenuOption.set("/webhooks")
          break;
        case '/perfil':
          this.selectedMenuOption.set("/perfil")
          break;
        case '/configs':
          this.selectedMenuOption.set("/configs")
          break;
        case '/financeiro':
          this.selectedMenuOption.set("/financeiro")
          break;
        case '/logs':
          this.selectedMenuOption.set("/logs")
          break;
      }
    })
  }

  goToHomePage() {
    this.menuService.closeMenu()
    if (this.router.url != '/inicio') {
        this.router.navigate(['/inicio'])
    }
  }

  goToRequestsPage() {
this.menuService.closeMenu()
    if (this.router.url != '/solicitacoes') {
      this.router.navigate(['/solicitacoes'])
    }
  }

  goToCustomersPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/clientes') {
      this.router.navigate(['/clientes'])
    }
  }

  goToEnergyChartsPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/graficos-de-energia') {
      this.router.navigate(['/graficos-de-energia'])
    }
  }

  goToMeasurementQueryPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/consulta-de-medicao') {
      this.router.navigate(['/consulta-de-medicao'])
    }
  }

  goToWebhooksPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/webhooks') {
      this.router.navigate(['/webhooks'])
    }
  }

  goToProfilePage() {
    this.menuService.closeMenu()
    if (this.router.url != '/perfil') {
      this.router.navigate(['/perfil'])
    }
  }

  goToConfigsPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/configs') {
      this.router.navigate(['/configs'])
    }
  }

  goToFinancesPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/financeiro') {
      this.router.navigate(['/financeiro'])
    }
  }

  goToLogExplorerPage() {
    this.menuService.closeMenu()
    if (this.router.url != '/logs') {
      this.router.navigate(['/logs'])
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe()
  }
}
