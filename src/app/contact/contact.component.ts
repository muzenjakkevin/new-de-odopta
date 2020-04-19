import { Component, OnInit } from "@angular/core";
import { User } from "src/_helpers/user.model";
import { DataService } from "src/_helpers/data.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  users$: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService
      .getUsers()
      .subscribe((data) => (this.users$ = data));
  }
}
