import { TaskService } from './task.service';
import { NewedHuman } from './model/newed-human.vm';
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

  bornHumans$: Observable<Human[]>;
  growingHumans$: Observable<Human[]>;
  deadHumans$: Observable<Human[]>;
  rebornHumans$: Observable<Human[]>;

  bornPhoto = 'assets/born.jpg';
  growingPhoto = 'assets/growing.jpg';
  deadPhoto = 'assets/dead.jpg';
  rebornPhoto = 'assets/reborn.jpg';

  constructor(
    private humanService: HumanService,
    private taskService: TaskService) { }

  ngOnInit(): void {

    const humans$ = this.taskService.getHumans();

    this.bornHumans$ = humans$.pipe(
      map(humans => humans.filter(human => human.born && !human.growing))
    );
    this.growingHumans$ = humans$.pipe(
      map(humans => humans.filter(human => human.growing && !human.dead))
    );
    this.deadHumans$ = humans$.pipe(
      map(humans => humans.filter(human => human.dead && !human.reborn))
    );
    this.rebornHumans$ = humans$.pipe(
      map(humans => humans.filter(human => human.reborn))
    );
  }

  createHuman(newedHUman: NewedHuman) {

    const reqCreateHumanDto = newedHUman.toReqDto();
    this.humanService.createOne(reqCreateHumanDto).pipe(
      take(1)
    ).subscribe();
  }
}
