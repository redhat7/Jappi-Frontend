import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../../../utils/services/shared-data.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  closeNav: boolean;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.closeNav$.subscribe(closeNav => {
      this.closeNav = closeNav;
    });
  }
}
