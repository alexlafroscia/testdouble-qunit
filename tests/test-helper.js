import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

import testdoubleQunit from 'testdouble-qunit';
import QUnit from 'qunit';
import td from 'testdouble';

testdoubleQunit(QUnit, td);

setApplication(Application.create(config.APP));

start();
