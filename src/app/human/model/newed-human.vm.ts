import { ReqCreateHumanDto } from './../dto/req-create-human.dto';
export class NewedHuman {

  name: string;

  toReqDto(): ReqCreateHumanDto {
    return {
      name: this.name
    } as ReqCreateHumanDto;
  }
}
