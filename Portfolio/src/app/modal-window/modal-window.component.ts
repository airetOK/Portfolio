import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/constants';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  key: string = '';
  data: any = '';

  constructor(private router: ActivatedRoute) {
    this.key = this.router.snapshot.data['key'];
    this.data = Constants.paramMap.get(this.key);
   }

  ngOnInit(): void {
  }

}
