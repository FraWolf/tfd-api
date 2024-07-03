import { ErrorMessage } from "./errors";

export type Languages =
  | "ko"
  | "en"
  | "de"
  | "fr"
  | "ja"
  | "zh-CN"
  | "zh-TW"
  | "it"
  | "pl"
  | "pt"
  | "ru"
  | "es";

export interface Options {
  api_key?: string;
  default_language?: Languages;
}

export interface ClientOptions {
  host: string;
  default_language: Languages;
  headers: {
    "x-nxopen-api-key"?: string;
  };
}

export type APIResponse<T = unknown> = T extends ErrorMessage
  ? ErrorMessage
  : T;
