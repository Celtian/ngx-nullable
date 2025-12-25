import { Component, computed, inject, signal } from '@angular/core';
import { NgxNullableJoinPipe, NgxNullablePipe, NgxNullableService } from 'ngx-nullable';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  imports: [NgxNullablePipe, NgxNullableJoinPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly nullable = inject(NgxNullableService);
  public readonly title = signal('ngx-nullable');
  public readonly version = VERSION;
  public readonly input = signal<string>('');
  public readonly computed = computed(() => this.nullable.fromString(this.input()));
}
