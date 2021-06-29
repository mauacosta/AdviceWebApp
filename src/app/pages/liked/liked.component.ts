import { Component, OnInit } from '@angular/core';
import { Advice } from 'src/app/services/advice.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {

  likedAdvices:Advice[] = []
  areLiked:boolean = false

  constructor() { }

  ngOnInit(): void {

    this.likedAdvices = JSON.parse(localStorage.getItem('liked') ||  '[]');
    if(this.likedAdvices.length > 0){
      this.areLiked = true
    }

  }

  deleteFromLocal(id:number):void{

    let idToDelete  = this.likedAdvices.map((x: { id: number; }) => {
      return x.id;
    }).indexOf(id);
    
    this.likedAdvices.splice(idToDelete, 1);
    localStorage.setItem('liked', JSON.stringify(this.likedAdvices));

    if(this.likedAdvices.length < 0){
      this.areLiked = false
    }
  }

}
