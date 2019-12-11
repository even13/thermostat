'use strict';
describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  it('can increase the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has Power Saving mode by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch Powersaving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch the power saving mode on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

});
