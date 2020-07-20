import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-spinner-demo',
  templateUrl: './spinner-demo.component.html',
  styleUrls: ['./spinner-demo.component.css']
})
export class SpinnerDemoComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void { }

  onShowSpinner() {
    // Show spinner
    this.spinnerService.show();
  
    // Hide spinner after 3 secs
    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }

}
