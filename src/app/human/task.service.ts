import { ResHumanDto } from './dto/res-human.dto';
import { HumanService } from './human.service';
import { Human } from './model/human.vm';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, switchMapTo, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private numbers = interval(2000);

  private subject = new BehaviorSubject<Human[]>([]);

  constructor(private humanService: HumanService) {
    this.numbers.pipe(
      switchMapTo<ResHumanDto[]>(humanService.getMany()),
      map(resHumanDtos => resHumanDtos.map<Human>(human => new Human(human))),
    ).subscribe(humans => this.subject.next(humans));
  }

  getHumans(): Observable<Human[]> {
    return this.subject.asObservable();
  }
}
