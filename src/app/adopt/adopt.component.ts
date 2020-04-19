import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})

/**
 * Functions shows informations of the dogs on click
 */

export class AdoptComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  isShowDiv = true;


  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  isShowDiv2 = true;

  toggleDisplayDiv2() {
    this.isShowDiv2 = !this.isShowDiv2;
  }
  isShowDiv3 = true;

  toggleDisplayDiv3() {
    this.isShowDiv3 = !this.isShowDiv3;
  }
  isShowDiv4 = true;

  toggleDisplayDiv4() {
    this.isShowDiv4 = !this.isShowDiv4;
  }

  isShowDiv5 = true;


  toggleDisplayDiv5() {

    this.isShowDiv5 = !this.isShowDiv5;

  }

  isShowDiv6 = true;


  toggleDisplayDiv6() {

    this.isShowDiv6 = !this.isShowDiv6;

  }

  isShowDiv7 = true;


  toggleDisplayDiv7() {

    this.isShowDiv7 = !this.isShowDiv7;

  }

  isShowDiv8 = true;


  toggleDisplayDiv8() {

    this.isShowDiv8 = !this.isShowDiv8;

  }


  checkUser(){
    return Boolean(this.authenticationService.checkIfLoggedIn())
  }

  ngOnInit() {
  }

}
