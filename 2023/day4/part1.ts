import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

  const lines: string[] = data.split('\n');

  let totalPoints = 0;

  lines.forEach(line => {
    let totalCardPoints = 0;
    const [ _card, ...lists]: any = line.split(':');
    const [ winningList, myList ] = lists[0].split('|');

    // @ts-ignore
    const winningNumbers: string[] = winningList.split(' ').filter(item => item !== '');
    // @ts-ignore
    const myNumbers: string[] = myList.split(' ').filter(item => item !== '');

    myNumbers.forEach(number => {
      if(winningNumbers.includes(number)) {
        totalCardPoints += totalCardPoints !== 0 ? totalCardPoints : 1;
      }
    })

    totalPoints += totalCardPoints;
  })
  
  console.log(totalPoints)