import { Component, OnInit } from "@angular/core";

// Rutas (Model & Service)
import { Routes } from "../../../utils/models/routes.model";
import { RoutesService } from "../../../utils/services/routes/routes.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: Routes[];

  constructor(private routesService: RoutesService) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));

    if (currentUser.tipo == 1) {
      this.menuItems = this.routesService.getRutasUsuario();
    } else if (currentUser.tipo == 2) {
      this.menuItems = this.routesService.getRutasEmpresa();
    } else {
      this.menuItems = this.routesService.getRutasMotorizado();
    }
  }

  isMobileMenu() {
    return window.innerWidth > 900;
  }
}
