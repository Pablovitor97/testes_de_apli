import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public wavesPosition: number = 0;
  public wavesDifference: number = 80;

  constructor() { }

  ngOnInit() { }
  segmentChanged(event: any){
    if (event.detail.value === "login"){
      this.wavesPosition += this.wavesDifference;
    } else {
      this.wavesPosition -= this.wavesDifference;
    }
  }
}
