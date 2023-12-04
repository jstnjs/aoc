import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

  const allRecords: string[] = data.split('\n');
    let totalPower = 0;

  allRecords.forEach(record => {
    const [ game, ...rest ] = record.split(":");
    const sets = rest[0].trim().split(';');
    let red = 0;
    let green = 0;
    let blue = 0;

    sets.forEach(set => {
        const plays = set.split(',');
        plays.forEach(play => {
            const [ _amount, color ] = play.trim().split(" ");
            const amount = Number(_amount);
            if(color === 'red') {
                red = amount > red ? amount : red;
            }
            if(color === 'green') {
                green = amount > green ? amount : green;
            }
            if(color === 'blue') {
                blue = amount > blue ? amount : blue;
            }
        })
    })

    const power = red * green * blue;
    totalPower = totalPower + power;
  })

  console.log(totalPower);