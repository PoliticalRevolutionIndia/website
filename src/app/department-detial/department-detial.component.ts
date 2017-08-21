import { Component, OnInit, Input } from '@angular/core';
import { Department } from "../shared/department";

@Component({
  selector: 'app-department-detial',
  templateUrl: './department-detial.component.html',
  styleUrls: ['./department-detial.component.scss']
})
export class DepartmentDetialComponent implements OnInit {
  @Input()
  department : Department; 

  constructor() { }

  ngOnInit() {
  }

}
