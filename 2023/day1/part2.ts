import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

  const allRecords: string[] = data.split('\n');

  const outcome = allRecords.reduce((acc, currentValue) => {
    let numberValues = currentValue
    .replaceAll('one', 'o1e')
    .replaceAll('two', 't2o')
    .replaceAll('three', 't3e')
    .replaceAll('four', 'f4r')
    .replaceAll('five', 'f5e')
    .replaceAll('six', 's6x')
    .replaceAll('seven', 's7n')
    .replaceAll('eight', 'e8t')
    .replaceAll('nine', 'n9e')
    .replace(/\D/g, '');
    
    let actualNumber = Number(numberValues[0].concat(numberValues[numberValues.length -1]));
    
    return acc + actualNumber;
  }, 0)

  console.log(outcome) 