export interface NgxNullableOptions {
  /**
   * The character to display when the value is null or undefined.
   */
  character: string;
  /**
   * The separator to use when joining multiple values.
   */
  separator: string;
  /**
   * Whether to display zero when the value is zero.
   */
  displayZero: boolean;
}

export type NgxNullable<T> = T | null | undefined;
