# Angular2 humanize

This is a simple number formatter solution for angular2. Based on [humanize](https://github.com/emartech/humanize)

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
export class App {}
```
