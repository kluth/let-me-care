import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLayoutModule } from '@letmecare/ui-layout';

@Component({
  standalone: true,
  imports: [UiLayoutModule, RouterModule],
  selector: 'letmecare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';
}
