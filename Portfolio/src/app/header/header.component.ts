import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: any;
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

}
