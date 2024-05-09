import { Flags } from './flags';
import { Currency } from './currency';
import { Language } from './language';

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym: string;
  area?: number;
  gini?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies?: Currency[];
  languages: Language[];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa?: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs?: Array<{
    acronym: string;
    name: string;
    otherAcronyms?: string[];
    otherNames?: string[];
  }>;
  cioc?: string;
  independent: boolean;
}
