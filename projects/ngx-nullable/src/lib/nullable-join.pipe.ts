import { inject, Pipe, PipeTransform } from '@angular/core';
import { NgxNullable } from './ngx-nullable.interface';
import { NgxNullableService } from './ngx-nullable.service';

@Pipe({
  name: 'nullableJoin',
  standalone: true
})
export class NullableJoinPipe implements PipeTransform {
  private readonly nullable = inject(NgxNullableService);

  public transform(array: NgxNullable<string>[], separator?: string): unknown {
    return this.nullable.join(array, separator);
  }
}
