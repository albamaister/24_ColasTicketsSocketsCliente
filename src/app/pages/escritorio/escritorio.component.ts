
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {


  currentTicket: number = 0;
  escritorioNumero: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.escritorioNumero = Number(this.route.snapshot.paramMap.get('id'));
  }

  public next() {
    this.http.post('http://localhost:5000/nextClient', {escritorio: this.escritorioNumero})
    .subscribe((result: any) => {
      if (!result.error) {
        this.currentTicket = result.ticket;
      }
    });
  }


}
