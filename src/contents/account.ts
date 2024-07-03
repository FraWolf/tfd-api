import { Languages } from "../types/general";

export class Account {
  constructor(
    private url: string,
    private headers: Record<string, string>,
    private language: Languages
  ) {
    if (!headers["x-nxopen-api-key"]) throw Error("API Key is required");
  }

  public getId(username: string) {}
}
