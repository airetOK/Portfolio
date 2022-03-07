import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/constants';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static languageTranslation: string = 'UA';
  title: string = Constants.title;
  contacts: string = Constants.contacts;
  about: string = Constants.about;
  education: string = Constants.education;
  technologies: string = Constants.technologies;
  experience: string = Constants.experience;
  download: string = Constants.download;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    
  }

  navigate(event: string) {
    this.router.navigateByUrl('/' + event);
  }

  changeLanguageTranslation() {
    if (HeaderComponent.languageTranslation === 'UA') {
      HeaderComponent.languageTranslation = 'ENG';
      (<HTMLImageElement>document.querySelector(".flag")).src = '/assets/gb.svg';
    } else {
      HeaderComponent.languageTranslation = 'UA';
      (<HTMLImageElement>document.querySelector(".flag")).src = '/assets/ua.svg';
    }
  }

}
