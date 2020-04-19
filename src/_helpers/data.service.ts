import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})

export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  //Gets users from jsonplaceholder
  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }
}
