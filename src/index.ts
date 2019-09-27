import {MatchReader} from './MatchReader'
import {Summary} from './Summary'

//because of the static inside Summary,we can do the following
const matchReader = MatchReader.fromCsv('football.csv')
const summaryWithStatic = Summary.winsAnalysisWithHtmlReport('ManUnited')

matchReader.load()
summaryWithStatic.buildAndPrintReport(matchReader.matches)

