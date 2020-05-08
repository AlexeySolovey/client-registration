import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  private eventsUrl = "https://server-registration.herokuapp.com/api/events";
  private specialUrl = "https://server-registration.herokuapp.com/api/special";
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this.eventsUrl);
  }

  getSpecial() {
    return this.http.get<any>(this.specialUrl);
  }
}
