import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
    moduleId:module.id,
  selector: 'register',
  templateUrl:'register.component.html',
  styles: [`
    .error{
        background-color:#fff0f0;
    }
  `]
})
export class RegisterComponent  {
  form;
  constructor(private fb: FormBuilder){
      this.form = fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
      },{validator : matchingFields ('password', 'confirmPassword')} )
  }
  onSubmit(){
      console.log(this.form.errors);
  }

  isValid(control){
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

 }
 function matchingFields(param1 , param2){
    return form => {
            if(form.controls[param1].value !== form.controls[param2].value)
            return { mismatchedFields : true }
    }
 }
