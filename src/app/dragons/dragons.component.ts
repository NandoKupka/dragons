import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.sass']
})
export class DragonsComponent implements OnInit {
  dragons: any;
  page: number = 0;
  searchText: String;
  limitPage: number;

  constructor(private http: HttpClient) {
    
    this.http.get("https://dragons-api.herokuapp.com/api/dragons").subscribe(data => {
      this.dragons = data;
      this.limitPage = Math.floor((data['_metadata'].total_count - 1) / data['_metadata'].per_page);
      this.orderPage();
    })
  }

  ngOnInit() {
    
  }
  
  orderPage() {
    this.dragons.items.sort(function(a,b){
      return a.name.localeCompare(b.name);
    })
  }

  delete(item) {
    var r = confirm("Are you sure you want to delete it?");
    if (r == true) {
        this.http.delete("https://dragons-api.herokuapp.com/api/dragons/"+item.slug).subscribe(data => {
          this.http.get("https://dragons-api.herokuapp.com/api/dragons?page="+ (this.page)).subscribe(data => {
            this.dragons = data;
            this.orderPage();
          })
        })
    }
  }

  nextPage() {
    this.page += 1;
    this.http.get("https://dragons-api.herokuapp.com/api/dragons?page="+ (this.page)).subscribe(data => {
      this.dragons = data;
      this.orderPage();
    })
  }

  previousPage() {
    this.page -= 1;
    this.http.get("https://dragons-api.herokuapp.com/api/dragons?page="+ (this.page)).subscribe(data => {
      this.dragons = data;
      this.orderPage();
    })
  }


}
