import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
