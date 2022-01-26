const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  //return null;
  //return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (todaysWeather: { date: Date; weather: string }): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};

//2015
// const logWeather = ({date, weather}) => {
//     console.log(date);
//     console.log(weather);
// };

const logWeatherRefactored = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
