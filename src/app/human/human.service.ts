import { environment } from './../../environments/environment';
import { ResHumanDto } from './dto/res-human.dto';
import { ReqCreateHumanDto } from './dto/req-create-human.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanService {

  private readonly API_BASE_URL = `${environment.api_domain}/human`;

  constructor(private http: HttpClient) { }

  createOne(dto: ReqCreateHumanDto): Observable<ResHumanDto> {
    return this.http.post<ResHumanDto>(this.API_BASE_URL, dto);
  }

  getMany(): Observable<ResHumanDto[]> {
    return this.http.get<ResHumanDto[]>(this.API_BASE_URL);
  }
}
