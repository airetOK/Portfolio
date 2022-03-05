import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = Constants.title;
  contacts: string = Constants.contacts;
  about: string = Constants.about;
  education: string = Constants.education;
  technologies: string = Constants.technologies;
  experience: string = Constants.experience;
  download: string = Constants.download;

  constructor() { }

  ngOnInit(): void {
  }

}
