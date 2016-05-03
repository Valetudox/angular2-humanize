import humanize from 'humanize-num';
import { Pipe } from '@angular/core';

@Pipe({ name: 'humanize' })
export class HumanizePipe {

  transform(value) {
    return humanize(value);
  }

}
