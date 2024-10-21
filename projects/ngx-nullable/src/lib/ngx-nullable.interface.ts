export interface NgxNullableOptions {
  /**
   * The character to display when the value is null or undefined.
   * @default '—'
   */
  character: string;
  /**
   * The separator to use when joining multiple values.
   * @default ', '
   */
  separator: string;
  /**
   * Whether to display zero when the value is zero.
   * @default true
   */
  displayZero: boolean;
}

export type NgxNullable<T> = T | null | undefined;
