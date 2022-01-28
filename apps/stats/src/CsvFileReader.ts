import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MathResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  constructor(public fileName: string) {}
  data: MatchData[] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, //now TS knows it's going to be 'H', 'A', or 'D'
          row[6],
        ];
      });
  }
}