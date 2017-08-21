import { Component, OnInit } from '@angular/core';
import { PEOPLES } from '../shared/peoples';
import { People } from '../shared/people';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {

  peoples : People[] = PEOPLES;

  constructor() { }

  ngOnInit() {
  }

}
