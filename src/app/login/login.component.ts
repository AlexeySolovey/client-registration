import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

interface UserData {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginUserData: UserData = { email: null, password: null };
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/events"]);
      },
      err => console.log(err)
    );
  }
}
