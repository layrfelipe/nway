import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-measurement-query',
  templateUrl: 'measurement-query.page.html',
  styleUrls: ['measurement-query.page.scss'],
})
export class MeasurementQueryPage  implements OnInit {

  protected measurementQueries: any;

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })
  
  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.screenWidth.set(window.innerWidth);

    this.storage.getMeasurementQueriesMockData().subscribe((measurementQueries) => {
      if (measurementQueries) {
        this.measurementQueries = measurementQueries;
      }
    })
  }

  goToMeasurementQueryCustomerPage(companyId: any) {
    this.router.navigate(['consulta-de-medicao', 'cliente', companyId])    
  }
}
