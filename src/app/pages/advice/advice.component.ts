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
  likeBtn!: HTMLElement | null;
  liked:boolean = false
  loaded:boolean = false


  constructor(private adviceService: AdviceService, private activatedRoute: ActivatedRoute) {

  }



  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe(paramsId => {
      this.advice.id = paramsId.id;
      console.log(this.advice);
    });
    */
    this.loaded = false
    this.adviceService.getRandomAdvice().subscribe(res => {
      if (res) {
        this.advice.id = res.slip.id
        this.advice.advice = res.slip.advice
        this.loaded = true
      }
    })
  }

  newAdvice():void {
    location.reload()
  }

  toggleAdvice():void{
    let likeBtn = document.getElementById('likeBtn')
    if(!this.liked){
      likeBtn?.classList.add('liked')
      this.liked = true
      this.saveToLocal(this.advice)
    }else{
      likeBtn?.classList.remove('liked')
      this.liked = false
      this.deleteFromLocal(this.advice.id)
    }
    
  }


  saveToLocal(data:Advice):void{
    let advices = [];
    advices = JSON.parse(localStorage.getItem('liked') || '[]');
    advices.push(data)
    localStorage.setItem('liked', JSON.stringify(advices));
  }

  deleteFromLocal(id:number):void{
    let advices = [];
    advices = JSON.parse(localStorage.getItem('liked') ||  '[]');
    let idToDelete  = advices.map((x: { id: number; }) => {
      return x.id;
    }).indexOf(id);
    
    advices.splice(idToDelete, 1);
    localStorage.setItem('liked', JSON.stringify(advices));
  }

}
