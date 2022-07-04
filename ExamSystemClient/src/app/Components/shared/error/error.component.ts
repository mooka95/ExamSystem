import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  studentRegisterForm:FormGroup;
  @Input() controlName='';

  constructor(private controlContainer: ControlContainer) { }

  ngOnChanges():void {
    console.log(this.controlName);
    
  }

  ngOnInit(): void {
    this.studentRegisterForm = <FormGroup>this.controlContainer.control;
 
}

}
