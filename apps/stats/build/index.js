"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
//create an object that satifies the 'datareader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Liverpool"), new ConsoleReport_1.ConsoleReport());
const summaryHtml = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Wolves"), new HtmlReport_1.HtmlReports());
summary.buildAndPrintReport(matchReader.matches);
summaryHtml.buildAndPrintReport(matchReader.matches);
const summary3 = Summary_1.Summary.winsAnalysisWithHtmlReport("Arsenal");
const matchReader2 = MatchReader_1.MatchReader.fromCsv("football.csv");
