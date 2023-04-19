import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: RegisterService,
              private router: Router) {
  }

  ngOnInit() {
    this.createFormGroup();
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      login: [null, Validators.required],
      register: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public createUser(): void {
    if (this.formGroup.valid) {
        this.service.login(this.formGroup.value).subscribe(() => {
        this.router.navigate(['/']);
      })
    } else {
      window.alert("Preencha todos os campos!")
    }
  }
}
