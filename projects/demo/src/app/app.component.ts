import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgxNullableJoinPipe } from '../../../ngx-nullable/src/lib/ngx-nullable-join.pipe';
import { NgxNullablePipe, NgxNullableService } from '../../../ngx-nullable/src/public-api';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxNullablePipe, NgxNullableJoinPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'ngx-nullable';
  public version = VERSION;
  private readonly nullable = inject(NgxNullableService);
  public readonly input = signal<string>('');
  public readonly computed = computed(() => this.nullable.fromString(this.input()));
}
