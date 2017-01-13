const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;
const MS_PER_MONTH = MS_PER_DAY * 30;
const MS_PER_YEAR = MS_PER_DAY * 365;

const _milliseconds = new WeakMap();

class DateDifference {
  constructor(milliseconds) {
    _milliseconds.set(this, milliseconds);
  }

  get milliseconds() {
    return _milliseconds.get(this);
  }

  get seconds() {
    return Math.floor(_milliseconds.get(this) / MS_PER_SECOND);
  }

  get minutes() {
    return Math.floor(_milliseconds.get(this) / MS_PER_MINUTE);
  }

  get hours() {
    return Math.floor(_milliseconds.get(this) / MS_PER_HOUR);
  }

  get days() {
    return Math.floor(_milliseconds.get(this) / MS_PER_DAY);
  }

  get months() {
    return Math.floor(_milliseconds.get(this) / MS_PER_MONTH);
  }

  get years() {
    return Math.floor(_milliseconds.get(this) / MS_PER_YEAR);
  }
}

Date.prototype.diff = function (date) {
  const utc1 = Date.UTC(
    this.getFullYear(),
    this.getMonth(),
    this.getDate(),
    this.getHours(),
    this.getMinutes(),
    this.getSeconds(),
    this.getMilliseconds());

  const utc2 = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds());

  return new DateDifference(utc1 - utc2);
}
