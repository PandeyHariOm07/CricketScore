import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-scorepage',
  templateUrl: './scorepage.component.html',
  styleUrls: ['./scorepage.component.scss']
})
export class ScorepageComponent implements OnInit {
  schedule: any[] = []
  date: string ="";
      constructor(private _scoreService: ScoreService){}

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.getScoreSchedule();
  }
  getScoreSchedule() {
    const Category = "cricket"
    this.date=this.date.replace(/-/g, '');
    console.log(this.date)
    this._scoreService.getMatches(this.date, Category).subscribe(
      (data) => {
        this.schedule = data.Stages;
        console.log("Data", data)
      },
      (error)=>console.log(error))
  }

}
