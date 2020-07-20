import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './services/spinner-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading = false;

  constructor(
    private spinnerService: SpinnerService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.spinnerService.loading$.subscribe(
      loading => {
        this.isLoading = loading;
        this.changeDetectorRef.detectChanges();
      }
    )
  }
}
