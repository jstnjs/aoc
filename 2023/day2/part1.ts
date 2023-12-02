import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();


  const allRecords: string[] = data.split('\n');
    let totalValidGames = 0;

  allRecords.forEach(record => {
    const [ game, ...rest ] = record.split(":");
    const [ _, gameId ] = game.split(" ");
    const sets = rest[0].trim().split(';');
    let dirty = false;

    sets.forEach(set => {
        const plays = set.split(',');
        plays.forEach(play => {
            const [ amount, color ] = play.trim().split(" ");

            if(!dirty) {
                if(color === 'red' && Number(amount) > 12) {
                    dirty = true;
                } else if (color === 'green' && Number(amount) > 13) {
                    dirty = true;
                } else if (color === 'blue' && Number(amount) > 14) {
                    dirty = true;
                }
            }
        })
    })

    if(!dirty) {
        totalValidGames = totalValidGames + Number(gameId);
    }
  })

  console.log(totalValidGames);