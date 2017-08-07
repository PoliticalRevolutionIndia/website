import { Component, OnInit } from '@angular/core';
import { AboutUs } from '../shared/aboutus';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  aboutus : AboutUs[] = [{
    name : "Kunal Singh Solanki",
    picture : "assets/images/kunal.jpeg",
    summary: "From Banswara, studies Civil Engineering From Kanota College, Jaipur",
    twitter: "https://twitter.com/K_sSolanki",
    facebook: "https://www.facebook.com/kunal.solanki.5201?ref=br_rs",
    designation: "Co-founder",
  },
  {
    name : "Rhitik Bhatt",
    picture : "assets/images/rhitik.jpeg",
    summary: "From Banswara, studies Computer Science Engineering From Universsity of The People, California",
    twitter: "https://twitter.com/LambaInsaan",
    facebook: "https://www.facebook.com/LambaInsaan",
    designation: "Co-founder",
  }
];

  constructor() { }

  ngOnInit() {
  }

}
