import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

interface UserData {
  email: string;
  password: string;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerUserData: UserData = { email: null, password: null };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser(): void {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/events"]);
      },
      err => console.log(err)
    );
  }
}
