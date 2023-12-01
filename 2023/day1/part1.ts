import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();


  const allRecords: string[] = data.split('\n');

  const outcome = allRecords.reduce((acc, currentValue) => {
    const numberValues = currentValue.replace(/\D/g, '');
    
    const actualNumber = Number(numberValues[0].concat(numberValues[numberValues.length -1]));
    return acc + actualNumber;

  }, 0)

  console.log(outcome)