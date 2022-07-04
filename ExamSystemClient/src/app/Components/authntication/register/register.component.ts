import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  studentRegisterForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.maxLength(20),Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required])
  },{validators:this.ConfirmPassword('password','confirmPassword')});
  

  constructor() { }

  ngOnInit(): void {
  
  }
  getObjectName(index:number):string {


    return Object.keys(this.studentRegisterForm.value)[index];


  }
  ConfirmPassword(password:any, confirmPassword:any):any {
  return(formGroup:FormGroup)=>{
    const passwordControl=formGroup.controls[password];
    const confirmPasswordControl=formGroup.controls[confirmPassword];
    if(confirmPasswordControl.errors && !confirmPasswordControl.errors['mismatch'])
    return;
    if(passwordControl.value !==confirmPasswordControl.value){
      confirmPasswordControl.setErrors({mismatch:true})
    }else{
      confirmPasswordControl.setErrors(null);
    }



  }
}
onSubmit(){
console.log(this.studentRegisterForm)



}

}
