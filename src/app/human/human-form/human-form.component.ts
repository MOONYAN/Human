import { NewedHuman } from './../model/newed-human.vm';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-human-form',
  templateUrl: './human-form.component.html',
  styleUrls: ['./human-form.component.css']
})
export class HumanFormComponent implements OnInit {

  humanForm: FormGroup;

  @Output() $newedHuman = new EventEmitter<NewedHuman>();

  private readonly initFormValue = {
    name: ''
  };

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.humanForm = this.builder.group(this.initFormValue);
  }

  onSubmit(value) {
    if (this.humanForm.valid) {
      const newedHuman = new NewedHuman();
      newedHuman.name = value.name;

      this.$newedHuman.emit(newedHuman);
      this.humanForm.reset(this.initFormValue);
    }
  }

  onReset() {
    this.humanForm.reset(this.initFormValue);
  }

}
