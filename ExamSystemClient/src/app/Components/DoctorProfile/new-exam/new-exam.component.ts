import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.scss']
})
export class NewExamComponent implements OnInit {

  isEditable = false;

  subjectnameform=new FormGroup({
    subjectname:new FormControl('',[Validators.required,Validators.minLength(2)])
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.subjectnameform)
  }

}
