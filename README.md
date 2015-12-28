# Angular2 humanize

This is a simple humanize solution for angular2. 

Install
---------

```bash
npm install --save angular2-humanize
```

Usage in template
---------

```javascript

import { HumanizePipe } from 'angular2-humanize';

@Component({
  selector: '<sub-app>',
  pipes: [HumanizePipe],
  template: `
    <h1>{{ 5444 | humanize }}</h1>
  `
})
export class App {
```
