<p align="center">
  <a href="https://github.com/Celtian/ngx-nullable" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxNullable</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-nullable.svg)](https://badge.fury.io/js/ngx-nullable)
[![Package License](https://img.shields.io/npm/l/ngx-nullable.svg)](https://www.npmjs.com/ngx-nullable)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-nullable.svg)](https://www.npmjs.com/ngx-nullable)
[![Snyk](https://snyk.io/advisor/npm-package/ngx-nullable/badge.svg)](https://snyk.io/advisor/npm-package/ngx-nullable)
[![codecov](https://codecov.io/gh/Celtian/ngx-nullable/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-nullable/)
[![stars](https://badgen.net/github/stars/celtian/ngx-nullable)](https://github.com/celtian/ngx-nullable/)
[![forks](https://badgen.net/github/forks/celtian/ngx-nullable)](https://github.com/celtian/ngx-nullable/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-nullable.svg)](http://hits.dwyl.com/celtian/ngx-nullable)

This library provides a way to make properties nullable in Angular templates.

> ✓ _Angular 19 compatible_

Here's the [demo](http://celtian.github.io/ngx-nullable/)

- Lightweight
- No dependencies!

## 🛠️ Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-nullable
```

2. Add `provideNullable` into your config (optional)

```typescript
import { provideNullable } from 'ngx-nullable';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideNullable({
      character: '---',
      separator: ' | ',
      displayZero: true
    })
  ]
};
```

or module

```typescript
  import { provideNullable } from 'ngx-nullable';

  @NgModule({
   // ...
   providers: [
     // ...
     provideNullable({
       character: '---',
       separator: ' | ',
       displayZero: true
     })
   ]
  })
```

## 🚀 Quick start

### Pipe example

```html
<ul>
  <li>{{ -1000 | ngxNullable }}</li>
  <li>{{ 1000 | ngxNullable }}</li>
  <li>{{ 0 | ngxNullable }}</li>
  <li>{{ null | ngxNullable }}</li>
  <li>{{ undefined | ngxNullable }}</li>
  <li>{{ 'string' | ngxNullable }}</li>
  <li>{{ '' | ngxNullable }}</li>
  <li>{{ ' ' | ngxNullable }}</li>
</ul>

<ul>
  <li>{{ ['', ' ', undefined, null] | ngxNullableJoin }}</li>
  <li>{{ ['AAA', 'BBB', 'CCC'] | ngxNullableJoin }}</li>
  <li>{{ ['AAA', '', ' ', undefined, null, 'BBB'] | ngxNullableJoin }}</li>
  <li>{{ [] | ngxNullableJoin }}</li>
</ul>
```

### Signals example

```Typescript

@Component({
  // ...
})
class Example {
  private readonly nullable = inject(NgxNullableService);
  public readonly input = signal<string>('');
  public readonly computed = computed(() => this.nullable.fromString(this.input()));
}

```

## 🛠️ Options

### Root options

| Option          | Type    | Default | Description                                                  |
| --------------- | ------- | ------- | ------------------------------------------------------------ |
| **character**   | string  | '—'     | The character to display when the value is null or undefined |
| **separator**   | string  | ', '    | The separator to use when joining multiple values            |
| **displayZero** | boolean | true    | Whether to display zero when the value is zero               |

## 📦 Dependencies

_None_

## 🪪 License

Copyright &copy; 2024 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
