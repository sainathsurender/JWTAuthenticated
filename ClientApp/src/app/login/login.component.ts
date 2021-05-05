import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomHTTPService } from '../Common/CustomHTTPService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http: CustomHTTPService, private router: Router) { }
  private loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit(data){
    this._http.post('https://localhost:5001/WeatherForecast/login', data)
    .subscribe(res => {
      localStorage.setItem("jwt", res["token"]);
      this.router.navigate(["/"]);
    });

  }

}
