"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//because of the static inside Summary,we can do the following
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summaryWithStatic = Summary_1.Summary.winsAnalysisWithHtmlReport('ManUnited');
matchReader.load();
summaryWithStatic.buildAndPrintReport(matchReader.matches);
