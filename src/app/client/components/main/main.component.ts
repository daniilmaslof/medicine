import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {StepperComponent} from '../stepper/stepper.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  /**
   *Open Login Modal window.
   */
  public openLogin(): void {
    const dialogLogin = this.dialog.open(LoginComponent, {
      width: '250px',
      height: '350px',
    } as MatDialogConfig<any>);
  }

  public openMakeAppointment(): void {
    this.dialog.open(StepperComponent,
      {
        width: '1200px',
        height: '800px',
        panelClass: 'dialog-no-padding-panel',
      } as MatDialogConfig<any>);
  }
}
