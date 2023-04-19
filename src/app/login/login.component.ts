import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {UserDTO} from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.createFormGroup();
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public login(): void {
    if (this.formGroup.valid) {
      this.service.login(this.formGroup.value).subscribe((response: UserDTO) => {
        localStorage.setItem("user", JSON.stringify(response));
        this.router.navigate(['/point']);
      }, {})
    } else {
      window.alert("Preencha todos os campos!")
    }
  }
}
