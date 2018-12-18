import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-dragon',
  templateUrl: './view-dragon.component.html',
  styleUrls: ['./view-dragon.component.sass']
})
export class ViewDragonComponent implements OnInit {
  slug: string;
  dragon: any;

  constructor( private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.http.get("https://dragons-api.herokuapp.com/api/dragons/"+this.slug).subscribe(data => {
      this.dragon = data;
    })
  }

  formatDate(date) {
    return (new Date(date)).toLocaleDateString(("en-US"))
  }

  delete() {
    var r = confirm("Are you sure you want to delete it?");
    if (r == true) {
        this.http.delete("https://dragons-api.herokuapp.com/api/dragons/"+this.slug).subscribe(data => {
          this.router.navigate(['', 'dragons'])

        })
    }
  }

  ngOnInit() {
  }

}
