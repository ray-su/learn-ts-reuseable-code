import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {MatchResult} from './matchResults'

const reader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(reader)
matchReader.load()

console.log(matchReader.matches)

// const dateOfFirstMatch = reader.data[0][0];
// console.log("dsa", dateOfFirstMatch);

// console.log('dsa', reader.data)

//MU win
let manUnitedWins = 0
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
	manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
	manUnitedWins++
  }
}

console.log(manUnitedWins)
