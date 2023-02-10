import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-validate",
  templateUrl: "./validate.component.html",
  styleUrls: ["./validate.component.scss"],
})
export class ValidateComponent implements OnInit {
  emailValidar: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ emailValidar }) => {
      this.emailValidar = emailValidar;
    });
  }
}
