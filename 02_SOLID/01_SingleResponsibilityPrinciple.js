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

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  // save(filename) {
  //   fs.writeFileSync(filename, this.toString());
  // }

  // load(filename) {}

  // loadFromUrl(url) {}
}

class PersistenceManager {
  preprocess(journal) {}

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());
console.log(__dirname);

let p = new PersistenceManager();
let filename = `${__dirname}/journal.txt`;

p.saveToFile(j, filename);

// separation of concerns
