import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  selectedCountry = '';
  selected = '';
  selectedCity = '';
  public countryList: String[] = [];
  public jsonResponse;
  title = 'Smart Selection Box App';
  cities = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUrls();
  }

  getUrls() {
     this.http.get('https://raw.githubusercontent.com/Abhijith-Nagaraja/all-countries-and-cities-json/master/countries.json').subscribe(data => {
      console.log(data);
      this.jsonResponse = data;
      this.countryList = Object.keys(data);
    });

  }
  onSelectCountry(country_id: string) {
    this.selectedCountry = country_id;
    this.cities = this.jsonResponse[country_id];
  }

}
