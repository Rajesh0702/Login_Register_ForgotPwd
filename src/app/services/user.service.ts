import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models/user";

@Injectable({ providedIn: "root" })
export class UserService {
  individualUser: any;
  constructor(private http: HttpClient) {}

  storeRegisteredData(user) {
    this.individualUser = user;
  }

  getAllUsers() {
    return this.individualUser;
  }
}
