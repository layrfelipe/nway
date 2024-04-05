import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('lineCanvas') protected lineCanvas: any;
  lineChart: any;

  protected user: any;
  protected notifications: any;
  protected requests: any;

  protected screenWidth = signal<number>(0)

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  goToRequestsPage() {
    this.router.navigate(['solicitacoes'])
  }

  goToNotificationsPage() {
    this.router.navigate(['inicio', 'notificacoes'])
  }

  ngOnInit() {
    this.screenWidth.set(window.innerWidth)
    
    this.storage.getUsersMockData().subscribe((users) => {
      if (users) {
        this.user = users[0];
      }
    })

    this.storage.getNotificationsMockData().subscribe((notifications) => {
      if (notifications) {
        this.notifications = notifications.slice(0, 3);
      }
    })

    this.storage.getRequestsMockData().subscribe((requests) => {
      if (requests) {
        this.requests = requests.slice(0, 3)
      }
    })
  }

  ngAfterViewInit() {
    this.lineChartMethod();  
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: 'Consumo em kWh',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [200, 230, 150, 650, 610, 620, 200, 420, 100, 450],
            spanGaps: false,
          },
          {
            label: 'Consumo em kWh',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 130, 180, 620, 800, 400, 476, 300, 120, 400],
            spanGaps: false,
          }
        ]
      }
    })
  }
}
