///<reference path="e2etest-tsd.d.ts"/>
import {E2eConfig,devlocalConfig} from './e2e.config';

describe('Angular2Starter-App', function() {
  beforeAll(function() {
    browser.get(devlocalConfig.baseUrl);
  });


  it('should have a title', function() {
    var subject = browser.getTitle();
    var result  = 'Angular2Starter';
    expect(subject).toContain(result);
  });

  it('should have <header>', function() {
    var subject = $('head').isPresent();
    var result  = true;
    expect(subject).toEqual(result);
  });

  it('should have body>app', function() {
    var subject = $('body>app').isPresent();
    var result  = true;
    expect(subject).toEqual(result);
  });
});
