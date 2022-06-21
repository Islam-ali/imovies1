import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
})
export class TrendComponent implements OnInit {
  selected = 'option2';
  type =[
    {value:'all'},
    {value:'movie'},
    {value:'tv'}
  ];
  time=[
    {value:'day'},
    {value:'week'}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  view(form:any)
  {
    if(form.valid)
    {
      this.router.navigate(['/trend/', form.value.type , form.value.time])
    }
  }
}
