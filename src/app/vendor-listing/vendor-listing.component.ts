import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.component.html',
  styleUrls: ['./vendor-listing.component.css']
})
export class VendorListingComponent implements OnInit {
  vendorList:any=[]
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.http.get('http://localhost:7000/vendor/all').subscribe((data:any)=>{
      console.log(data)
      this.vendorList = data.vendors
      console.log(this.vendorList)
    })
  }
  gotoList() {
    this.router.navigate(['/new-listing']);
  }
}
