import { Component, OnInit } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {

  projects:Project[];

  constructor() {
    this.projects = [
      {
       id: 1,
       name: 'Prism',
       logo: '../assets/Prism.svg',
       logoWidth: 100,
       description: 'The ultimate Containerization for Proprietary software!',
       projectPageLink: '#',
       gitLink: 'https://github.com/thegamerhat/',
       blogLink: 'https://blog.cybrdise.com/posts/',
      },
      {
        id: 2,
        name: 'Quick VM',
        logo: '../assets/vm-logo.svg',
        logoWidth: 80,
        description: 'Make a Windows VM in under 100 seconds!',
        projectPageLink: '#',
        gitLink: 'https://github.com/thegamerhat/quick-vm/',
        blogLink: 'https://blog.cybrdise.com/posts/quick-vm/',
       },
  ];
  }

  ngOnInit(): void {
  }

}
