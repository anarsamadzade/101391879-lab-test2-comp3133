import { Component } from '@angular/core';
import { MissionListComponent } from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MissionListComponent], // Import standalone component
})
export class AppComponent {
  title = '101391879-lab-test2-comp3133';
}
