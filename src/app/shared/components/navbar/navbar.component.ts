import { Component, OnInit, ElementRef, Input } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

// Rutas (Model & Service)
import { Routes } from "../../../utils/models/routes.model";
import { RoutesService } from "../../../utils/services/routes/routes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() user: number = 1;
  private listTitles: any[];
  private toggleButton: any;
  private sidebarVisible: boolean;
  public rutas: Routes[];
  public mobile_menu_visible: any = 0;
  public location: Location;
  public isCollapsed = false;

  constructor(
    location: Location,
    private routesService: RoutesService,
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.user = currentUser.tipo;
    if (currentUser.tipo == 1) {
      this.rutas = this.routesService.getRutasUsuario();
    } else if (currentUser.tipo == 2) {
      this.rutas = this.routesService.getRutasEmpresa();
    } else {
      this.rutas = this.routesService.getRutasMotorizado();
    }
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
    this.router.events.subscribe(() => {
      this.sidebarClose();
      const $layer: any = document.getElementsByClassName("close-layer")[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });
  }

  collapse() {
    const navbar: HTMLElement = document.querySelector("#navbar");
    const navbarContent: HTMLElement = document.querySelector(
      "#collapseNavbar"
    );

    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("bg-white");
      navbarContent.classList.add("show");
    } else {
      navbar.classList.add("navbar-transparent");
      navbar.classList.remove("bg-white");
      navbarContent.classList.remove("show");
    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const mainPanel = <HTMLElement>(
      document.getElementsByClassName("main-panel")[0]
    );
    const html = document.getElementsByTagName("html")[0];
    if (window.innerWidth < 991) {
      mainPanel.style.position = "fixed";
    }

    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);

    html.classList.add("nav-open");

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const html = document.getElementsByTagName("html")[0];
    this.toggleButton.classList.remove("toggled");
    const mainPanel = <HTMLElement>(
      document.getElementsByClassName("main-panel")[0]
    );
    if (mainPanel) {
      if (window.innerWidth < 991) {
        setTimeout(function () {
          mainPanel.style.position = "";
        }, 500);
      }
      this.sidebarVisible = false;
      html.classList.remove("nav-open");
    }
  }

  sidebarToggle() {
    const html = document.getElementsByTagName("html")[0];
    const $toggle = document.getElementsByClassName("navbar-toggler")[0];

    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }

    if (this.mobile_menu_visible == 1) {
      html.classList.remove("nav-open");
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove("toggled");
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add("toggled");
      }, 430);

      var $layer = document.createElement("div");
      $layer.setAttribute("class", "close-layer");

      if (html.querySelectorAll(".main-panel")) {
        document.getElementsByClassName("main-panel")[0].appendChild($layer);
      } else if (html.classList.contains("off-canvas-sidebar")) {
        document
          .getElementsByClassName("wrapper-full-page")[0]
          .appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add("visible");
      }, 100);

      $layer.onclick = function () {
        html.classList.remove("nav-open");
        this.mobile_menu_visible = 0;
        $layer.classList.remove("visible");
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove("toggled");
        }, 400);
      }.bind(this);

      html.classList.add("nav-open");
      this.mobile_menu_visible = 1;
    }
  }

  getTitle() {
    let title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === "#") {
      title = title.slice(2);
    }
    title = title.split("/").pop();

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === title) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }
}
