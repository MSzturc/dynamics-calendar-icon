const {resolve} = require('path')
const fs = require('fs-extra');
const {render} = require('mustache')

const templatePath = 'calendar.svg.mustache'

const template = fs.readFileSync(templatePath, {encoding: 'utf-8'});

const time = new Date();
const locale = "de-de";

const DD   = time.getDate();
const DDD  = time.toLocaleString(locale, {weekday: "long" });
const MMM  = time.toLocaleString(locale, {month:   "short"}).toUpperCase();


const content = {
  "month": MMM,
  "date": DD,
  "day": DDD
}

const rendered = render(template, content);
const exportFile = 'dist/' + templatePath.replace('.mustache', '');
fs.ensureFileSync(exportFile)

fs.writeFileSync(
  exportFile,
  rendered,
)