import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReports } from "./reportTargets/HtmlReport";

//create an object that satifies the 'datareader' interface
const csvFileReader = new CsvFileReader("football.csv");
//create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Liverpool"), new ConsoleReport());
const summaryHtml = new Summary(new WinsAnalysis("Wolves"), new HtmlReports());

summary.buildAndPrintReport(matchReader.matches);
summaryHtml.buildAndPrintReport(matchReader.matches);
const summary3 = Summary.winsAnalysisWithHtmlReport("Arsenal");
const matchReader2 = MatchReader.fromCsv("football.csv");
