import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "../_models/user";
import { UserService } from "../services/user.service";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent implements OnInit {
  currentUser: User;
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.user = this.userService.getAllUsers();
    console.log(this.user);
  }
}
