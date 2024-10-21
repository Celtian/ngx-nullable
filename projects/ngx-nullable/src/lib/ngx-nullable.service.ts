import { inject, Injectable } from '@angular/core';
import { NgxNullable } from './ngx-nullable.interface';
import { DISPLAY_ZERO_TOKEN, NULLABLE_CHARACTER_TOKEN, NULLABLE_SEPARATOR_TOKEN } from './ngx-nullable.provider';

@Injectable({
  providedIn: 'root'
})
export class NgxNullableService {
  private readonly nullable = inject(NULLABLE_CHARACTER_TOKEN);
  private readonly separator = inject(NULLABLE_SEPARATOR_TOKEN);
  private readonly displayZero = inject(DISPLAY_ZERO_TOKEN);

  private filterStringArray(input: NgxNullable<string>[]) {
    return input.filter((i) => typeof i === 'string' && !!i?.trim());
  }

  public join(array: NgxNullable<string>[], separator: string = this.separator): string {
    return this.filterStringArray(array).join(separator) || this.nullable;
  }

  public fromString(input: NgxNullable<string>): string {
    return input || this.nullable;
  }

  public fromNumber(input: NgxNullable<number>): number | string {
    return this.displayZero ? (input ?? this.nullable) : input || this.nullable;
  }
}
