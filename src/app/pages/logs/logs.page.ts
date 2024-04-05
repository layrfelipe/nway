import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-logs',
  templateUrl: 'logs.page.html',
  styleUrls: ['logs.page.scss'],
})
export class LogsPage implements OnInit {

  protected logs: any;

  constructor(
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.storage.getLogsMockData().subscribe((logs) => {
      if (logs) {
        this.logs = logs.slice(0, 5);
      }
    })
  }
}
