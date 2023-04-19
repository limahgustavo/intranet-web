import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PointService} from "../point/point.service";
import {UserDTO} from "../../models/User";

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class TlconsultaComponent {

  public formGroup!: FormGroup;
  public pointData?: any[];

  constructor(private formBuilder: FormBuilder,
              private service: PointService) {
  }
  ngOnInit() {
    this.createFormGroup();
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      register: [null],
    });
  }

  public getPointData(): void {
    this.pointData = [];
    this.service.getPointsByRegister(this.formGroup.value.register)
      .subscribe((response: any[]) => {
        if (response.length === 0) {
             window.alert('Registro de Usuario não Encontrado')
        }
        this.pointData = response;
      })
  }

}
