import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  theaterMovies: any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTreaterMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    })
  }

  getTreaterMovies() {
    this.http.get('http://localhost:4200/assets/data/theater-movies.json').subscribe((movies) => {
      this.theaterMovies = movies;
      console.log(this.theaterMovies);
    })
  }

  gotToMovie(type: string, id: string) {
    this.router.navigate(['movie',type,id])
  }
}
