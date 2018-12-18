import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dragon',
  templateUrl: './new-dragon.component.html',
  styleUrls: ['./new-dragon.component.sass']
})
export class NewDragonComponent implements OnInit {
  slug: string;
  dragon: any;


  constructor( private http: HttpClient, private router: Router) {
    this.dragon = {
      "name": '',
      "type": '',
    }
  }

  ngOnInit() {
  }


  save() {
    this.http.post("https://dragons-api.herokuapp.com/api/dragons", this.dragon).subscribe(data => {
      this.router.navigate(['', 'dragons'])
    })
  }

}
