import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progress-bar';
  activeform = 0;
  progressoForm = 0;
  multipleInputs = [
    {
      value: "1",
      label: "1"
    },
    {
      value: "2",
      label: "2"
    },
    {
      value: "3",
      label: "3"
    }
  ];

  proximoForm() {
    this.progressoForm = ((this.activeform + 1) * 100) / this.multipleInputs.length;
    this.activeform += 1;
    console.log(this.progressoForm);
  }

  anteriorForm() {
    this.progressoForm = ((this.activeform + 1) * 100) / this.multipleInputs.length;
    this.activeform -= 1;
  }
}
