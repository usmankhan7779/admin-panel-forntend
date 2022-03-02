import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-listing',
  templateUrl: './add-new-listing.component.html',
  styleUrls: ['./add-new-listing.component.css']
})
export class AddNewListingComponent implements OnInit {
  listingform = new FormGroup({
    Listing_Name: new FormControl(),
    Contact_Person: new FormControl(),
    Listing_Description: new FormControl(),
    // Category: new FormControl(''),
    // SubCategory: new FormControl(''),
  })
  // listingform = this.fb.group({
  //   SubCategory: ['', [Validators.required]]
  // })
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  addnewlisting() {
    console.log('hi')
    console.log(this.listingform.value)
  }
  changesubcategory(e: any) {
    console.log(e.value)
    this.listingform.controls['SubCategory'].setValue(e.target.value, {
      onlySelf: true
    })
  }
}
