import {Component, OnInit} from "@angular/core";
import {MenuItem} from "@mybpm.workspace/menu-item";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  item: MenuItem | undefined;

  ngOnInit() {
    this.item = {
      id: 'menu-report',
      type: "REPORT",
      displayName: 'Отчеты'
    };
  }
}
