import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,TranslateModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  constructor(private authService: AuthService,private router:Router) {}
  passwordForm = new FormGroup(
    {
      newPassword: new FormControl<string>('', Validators.required),
      confirmPassword: new FormControl<string>('', Validators.required),
      email:new FormControl<string>('', Validators.required),
    },
    { validators: this.passwordMatchValidator }
  );
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }
    return null;
  }
  handleEditingPassword() {
    this.authService.requestToken(this.passwordForm.controls.email.value!).subscribe({
      next:(response)=>{
        this.editPassword(response.token)
      },
      error:(error)=>{
        this.errors = error.error;
      }
    })
  }
  editPassword(token:string){
    this.authService.editPassword({
      token: token,
      newPassword: this.passwordForm.controls.newPassword.value!,
    }).subscribe({
      next:(response)=>{
        Swal.fire({
          title: 'Done',
          text: response.message,
          showCancelButton: true,
        });
        this.router.navigateByUrl('/Home');
      },
      error:(error)=>{
        console.log(error)
        this.errors = error.error;
      }
    });
  }
  errors:{}|null = null;
  objectvalues = Object.values;
}
