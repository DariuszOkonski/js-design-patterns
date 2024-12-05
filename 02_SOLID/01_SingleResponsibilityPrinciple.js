const fs = require('fs');

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEnter(index) {
    delete this.entries[index];
  }

  toSting() {
    return Object.values(this.entries).join('\n');
  }
}
Journal.count = 0;

class PersistenceManager {
  preprocess(journal) {}

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toSting());
  }

  save(filename) {
    fs.writeFileSync(filename, this.toSting());
  }

  load(filename) {}

  loadFromUrl(url) {}
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a but.');

console.log(j.toSting());

let p = new PersistenceManager();
let filename = `${__dirname}\\journal.txt`;

p.saveToFile(j, filename);
