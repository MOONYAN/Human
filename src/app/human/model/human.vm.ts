import { ResHumanDto } from './../dto/res-human.dto';
export class Human {

  id: number;

  name: string;

  born: boolean;

  growing: boolean;

  dead: boolean;

  reborn: boolean;

  constructor(dto: ResHumanDto) {

    this.id = dto.id;
    this.name = dto.name;
    this.born = dto.born;
    this.growing = dto.growing;
    this.dead = dto.growing;
    this.reborn = dto.reborn;
  }
}
