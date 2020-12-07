import { Human } from './../model/human.vm';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-list',
  templateUrl: './human-list.component.html',
  styleUrls: ['./human-list.component.css']
})
export class HumanListComponent implements OnInit {

  @Input() humans: Human[];
  @Input() photo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
