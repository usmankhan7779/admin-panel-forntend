import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(public http: HttpClient, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [''],
      password: [''],
    });

  }

  login() {
    this.http.post('http://localhost:7000/admin/login', this.myForm.value).subscribe((data: any) => {
      if (data.token == "QpwL5tke4Pnpja7X4") {
        Swal.fire({
          icon: 'success',
          title: 'Logged In',
          text: 'You have Successfully Logged In'
        })
        // this.router.navigateByUrl('/dashboard');
      }

    })

  }

}
