'use strict';

import 'es6-shim';
import 'reflect-metadata';
const { expect } = require('chai');
import { HumanizePipe } from '../lib/index.js';

describe('Service', function() {

  describe('#translate', function() {

    it('should translate the given simple text', function() {
      let pipe = new HumanizePipe();
      expect(pipe.transform('5000')).to.eql('5k');
    });

  });

});
