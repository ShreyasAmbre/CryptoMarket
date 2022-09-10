import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currencySupported = []


  constructor(private service: MainServiceService) { }

  ngOnInit(): void {
    this.getCurrency()

  }

  getCurrency(){
    this.service.getAllCurrencySupported().subscribe(res=> {
      this.currencySupported = res
      console.log("RES FROM OBSERVABLE PIPE OPERATOR ===>", res)
    })
  }

}
