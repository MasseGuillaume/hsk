const fs = require('fs');

const hskRows = JSON.parse(fs.readFileSync('hsk.json'));

const range = x => Array(x).fill(1).map((x, y) => x + y)

console.log(`id,hanzi,pinyin,t0,t1,t2,t3,t4,t5,t6,t7,t8,t9`);
for (let row of hskRows) {
  if (row.level === 1) {
    const translations = row.translations.slice(0, 9);
    for (let i of range(9)) {
      translations[i] = translations[i] || "";
    }    
    const translations0 = translations.map(t => JSON.stringify(t.replaceAll(",",";")))
    console.log(
      [
        row.id,
        row.hanzi,
        row.pinyin,
        translations0
      ].join(",")
    );
  }
}