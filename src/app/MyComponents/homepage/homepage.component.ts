import { Component, OnInit } from '@angular/core';

import { HomepageContentComponent } from '../homepage-content/homepage-content.component'
import { TerminalComponent } from '../terminal/terminal.component'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
