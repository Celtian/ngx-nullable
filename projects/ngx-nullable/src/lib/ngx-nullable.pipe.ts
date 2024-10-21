import { inject, Pipe, PipeTransform } from '@angular/core';
import { NgxNullable } from './ngx-nullable.interface';
import { NgxNullableService } from './ngx-nullable.service';

@Pipe({
  name: 'ngxNullable',
  standalone: true
})
export class NgxNullablePipe implements PipeTransform {
  private readonly nullable = inject(NgxNullableService);

  public transform(value: NgxNullable<string | number>): string | number {
    switch (typeof value) {
      case 'number':
        return this.nullable.fromNumber(value);
      default:
        return this.nullable.fromString(value);
    }
  }
}
