import fetch from "isomorphic-unfetch";
import { ClientOptions, Options } from "./types/general";

export function generateOptions(changes: Options): ClientOptions {
  return {
    host: "https://open.api.nexon.com",
    default_language: changes?.default_language || "en",
    headers: {
      "x-nxopen-api-key": changes?.api_key,
    },
  };
}

export function formatQueryStrings(uri: string, params: Record<string, string | number>) {
  let fullUrl: string = uri;
  if (Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => searchParams.append(key, value.toString()));

    fullUrl += `?${searchParams.toString()}`;
  }

  return fullUrl;
}

export async function httpRequest(url: string, headers?: HeadersInit) {
  return await fetch(url, {
    method: "GET",
    headers,
  })
    .then((res) => {
      const isJson = res.headers.get("Content-Type") && res.headers.get("Content-Type")?.includes("application/json");
      return isJson
        ? res.json()
        : {
            error: {
              name: "CUSTOMERROR",
              message: "Unable to parse API response",
            },
          };
    })
    .catch((e) => {
      console.log(`[FETCHER//ERROR] ${e.message}`);
      return null;
    });
}
