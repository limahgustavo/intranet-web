import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../../models/User";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PointService} from "./point.service";

@Component({
  selector: 'app-point',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css']
})
export class PointComponent implements OnInit {
  public formGroup!: FormGroup;
  public pointData?: any[];

  constructor(private formBuilder: FormBuilder,
              private service: PointService) {
  }

  ngOnInit() {
    this.createFormGroup()
    this.getPointData();
  }

  get getUserInfo(): UserDTO {
    const data = localStorage.getItem('user')
    return JSON.parse(data!);
  }

  public getPointData(): void {
    this.service.getPoints(this.getUserInfo.id, this.formGroup.value.startDate, this.formGroup.value.endDate)
      .subscribe((response: any[]) => this.pointData = response)
  }

  public createPoint(): void {
    this.service.addPoint(this.getUserInfo.id)
      .subscribe(() => {
        window.alert("Ponto marcado com sucesso");
        this.getPointData();
      })
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      startDate: [new Date()],
      endDate: [new Date()]
    });
  }
}
