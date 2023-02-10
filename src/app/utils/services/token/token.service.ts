import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  getToken() {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    return token;
  }
}
