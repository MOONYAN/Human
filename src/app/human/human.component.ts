import { HumanService } from './human.service';
import { map, take } from 'rxjs/operators';
import { Human } from './model/human.vm';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {

  humans$: Observable<Human[]>;

  bornHumans$: Observable<Human[]>;
  growingHumans$: Observable<Human[]>;
  deadHumans$: Observable<Human[]>;
  rebornHumans$: Observable<Human[]>;

  bornPhoto = 'assets/born.jpg';
  growingPhoto = 'assets/growing.jpg';
  deadPhoto = 'assets/dead.jpg';
  rebornPhoto = 'assets/reborn.jpg';

  constructor(private humanService: HumanService) { }

  ngOnInit(): void {
    this.humans$ = this.humanService.getMany().pipe(
      map(resHumanDtos => resHumanDtos.map<Human>(human => new Human(human))),
    );
    this.bornHumans$ = this.humans$.pipe(
      map(humans => humans.filter(human => human.born && !human.growing))
    );
    this.growingHumans$ = this.humans$.pipe(
      map(humans => humans.filter(human => human.growing && !human.dead))
    );
    this.deadHumans$ = this.humans$.pipe(
      map(humans => humans.filter(human => human.dead && !human.reborn))
    );
    this.rebornHumans$ = this.humans$.pipe(
      map(humans => humans.filter(human => human.reborn))
    );
  }
}
