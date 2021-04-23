export const getColor = (entry: any): string => {
  switch (entry.data.region) {
    case Regions.Africa:
      return "#a66ef4f5";
    case Regions.Americas:
      return "#27AE60";
    case Regions.Asia:
      return "#EB5757";
    case Regions.Europe:
      return "#ea3ad7";
    case Regions.Oceania:
      return "#e8b35a";
    case Regions.Polar:
      return "#828282";
    default:
      return "lightgray";
  }
};

export enum Regions {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar",
}
