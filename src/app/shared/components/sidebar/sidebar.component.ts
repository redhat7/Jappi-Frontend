import { Component, OnInit } from "@angular/core";

// Rutas (Model & Service)
import { Routes } from "../../../utils/models/routes.model";

import { RoutesService } from "../../../utils/services/routes/routes.service";
import { SharedDataService } from "../../../utils/services/shared-data.service";

enum UserTypes {
  User1 = 1,
  User2 = 2,
  User3 = 3,
  User4 = 4,
  User5 = 5,
  User6 = 6
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: Routes[];

  constructor(
    private routesService: RoutesService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));

    switch (currentUser.tipo) {
      case UserTypes.User1:
        this.menuItems = this.routesService.getRutasUsuario();
        break;
      case UserTypes.User2:
        this.menuItems = this.routesService.getRutasEmpresa();
        break;
      case UserTypes.User3:
        this.menuItems = this.routesService.getRutasMotorizado();
        break;
      case UserTypes.User4:
        this.menuItems = this.routesService.getRutasAlmacen();
        break;
      case UserTypes.User5:
        this.menuItems = this.routesService.getRutasCoordinacion();
        break;
      case UserTypes.User6:
        this.menuItems = this.routesService.getRutasRecursosHumanos();
        break;
      default:
      // handle invalid user type
    }
  }

  toggleNavClass() {
    this.sharedDataService.toggleNavClass();
  }

  isMobileMenu() {
    return window.innerWidth > 900;
  }
}
