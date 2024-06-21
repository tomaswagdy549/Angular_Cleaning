import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  standalone:true,
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Component logic here
  page: string = 'Footer';
}
