import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxNullableJoinPipe } from '../../../ngx-nullable/src/lib/ngx-nullable-join.pipe';
import { NgxNullablePipe } from '../../../ngx-nullable/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxNullablePipe, NgxNullableJoinPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'demo';
}
