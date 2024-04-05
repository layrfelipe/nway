import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-request-status',
  templateUrl: 'request-status.page.html',
  styleUrls: ['request-status.page.scss'],
})
export class RequestStatusPage implements OnInit {

  protected id: any;
  protected requestData: any;

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.id = this.router.url.split("/")[3]
    this.getRequestStatusData()
  }

  getRequestStatusData() {
    this.storage.getRequestsMockData().subscribe(requests => {
      let request = requests.filter((req: any) => req.id == this.id)[0]
      this.requestData = request
    })
  }
  
  goToCustomerDetailPage() {
    this.router.navigate(['clientes/cliente'])
  }
}
