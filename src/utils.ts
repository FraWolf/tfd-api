import { ClientOptions, Options } from "./types/general";

export function generateOptions(changes: Options): ClientOptions {
  return {
    host: "https://open.api.nexon.com",
    default_language: changes.default_language || "en",
    headers: {
      "x-nxopen-api-key": changes.api_key,
    },
  };
}
