import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../css/responsive.css', '../../css/style.css', '../../css/bootstrap.min.css', '../../css/owl.carousel.css']
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  @Input() isInnerPage = false;

}
