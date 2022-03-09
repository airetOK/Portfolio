import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Constants } from 'src/constants';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static languageTranslation: string = 'ua';
  title: string = Constants.ua_title;
  contacts: string = Constants.ua_contacts;
  about: string = Constants.ua_about;
  education: string = Constants.ua_education;
  technologies: string = Constants.ua_technologies;
  experience: string = Constants.ua_experience;
  download: string = Constants.ua_download;

  constructor(private router: Router) {
    let url = window.location.pathname.substring(1);
    this.router.navigate([url], { state: { example: HeaderComponent.languageTranslation + '_' + url } });
  }

  ngOnInit(): void {
  }

  navigate(event: string) {
    this.router.navigate([event], { state: { example: HeaderComponent.languageTranslation + '_' + event } });
  }

  changeLanguageTranslation() {
    if (HeaderComponent.languageTranslation === 'ua') {
      HeaderComponent.languageTranslation = 'eng';
      (<HTMLImageElement>document.querySelector(".flag")).src = '/assets/gb.svg';
      this.title = Constants.eng_title;
      this.about = Constants.eng_about;
      this.contacts = Constants.eng_contacts;
      this.education = Constants.eng_education;
      this.technologies = Constants.eng_technologies;
      this.experience = Constants.eng_experience;
      this.download = Constants.eng_download;
      ModalWindowComponent.data = Constants.paramMap.get('eng_' + this.router.url.substring(1));
    } else {
      HeaderComponent.languageTranslation = 'ua';
      (<HTMLImageElement>document.querySelector(".flag")).src = '/assets/ua.svg';
      this.title = Constants.ua_title;
      this.about = Constants.ua_about;
      this.contacts = Constants.ua_contacts;
      this.education = Constants.ua_education;
      this.technologies = Constants.ua_technologies;
      this.experience = Constants.ua_experience;
      this.download = Constants.ua_download;
      ModalWindowComponent.data = Constants.paramMap.get('ua_' + this.router.url.substring(1));
    }
  }

}
