import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  checkUser(){
    return Boolean(this.authenticationService.checkIfLoggedIn())
  }

  ngOnInit() {
  }

}
