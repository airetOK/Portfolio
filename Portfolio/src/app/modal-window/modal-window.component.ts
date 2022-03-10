import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/constants';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  static data: any = '';

  constructor(private router: Router) {
    let key = this.router.getCurrentNavigation()?.extras?.state?.['example'];    
    ModalWindowComponent.data = Constants.paramMap.get(key);
   }

  ngOnInit(): void {
  }

  get getData() {
    return ModalWindowComponent.data;
  }

  closeModalWindow() {
    (<HTMLImageElement>document.querySelector(".custom-container")).style.display = 'none';
  }

}
