import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems = ConfigService.config.menuItems;
  homePage = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
