import {Component, OnInit} from "@angular/core";
import {MenuItem} from "@mybpm.workspace/menu-item";
import {Router} from "@angular/router";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  item: MenuItem | undefined;

  constructor(
    private readonly router: Router,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'no-color-info',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/no-color-info.svg?_=tWTRca3Qhw')
    );
  }

  ngOnInit() {
    this.item = {
      id: 'menu-element-1',
      icon: 'no-color-info',
      displayName: 'Тестовое меню',
      route: '/test'
    };
  }

  navigateTo(el: MenuItem) {
    this.router.navigate([el.route]).then();
  }
}
