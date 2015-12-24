let humanize = require('humanize-num');
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({ name: 'humanize' })
export class HumanizePipe implements PipeTransform {

  transform(value) {
    return humanize(value);
  }

}
