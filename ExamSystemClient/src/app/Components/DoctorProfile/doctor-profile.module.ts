import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewExamComponent } from './new-exam/new-exam.component';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { StudentsComponent } from './students/students.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionFormComponent } from './new-exam/question-form/question-form.component';
const routes:Routes=[
  {path:'students',component:StudentsComponent},
  {path:'subjects',component: SubjectComponent},
  {path:'new-exam',component: NewExamComponent},
  {path: '',redirectTo:'subjects',pathMatch:'full'}
]

@NgModule({
  declarations: [
    SubjectComponent,
    StudentsComponent,
    NewExamComponent,
    QuestionFormComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DoctorProfileModule { }
