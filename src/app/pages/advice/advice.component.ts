import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdviceService, Advice } from 'src/app/services/advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})



export class AdviceComponent implements OnInit {

  advice: Advice = { id: 0, advice: "" }


  constructor(private adviceService: AdviceService, private activatedRoute: ActivatedRoute) {

  }



  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe(paramsId => {
      this.advice.id = paramsId.id;
      console.log(this.advice);
    });
    */

    this.adviceService.getRandomAdvice().subscribe(res => {
      if (res) {
        this.advice.id = res.slip.id
        this.advice.advice = res.slip.advice
      }
    })
  }

  newAdvice() {
    location.reload()
  }


}
