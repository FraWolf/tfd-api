import { Account } from "./contents/account";
import { Metadata } from "./contents/metadata";
import { ClientOptions, Options } from "./types/general";
import { generateOptions } from "./utils";

export class Bunny {
  private options: ClientOptions;

  public account: Account;
  public metadata: Metadata;

  constructor(config: Options) {
    this.options = generateOptions(config);

    this.account = new Account(this.options.host, this.options.headers, this.options.default_language);
    this.metadata = new Metadata(this.options.host, this.options.default_language);
  }
}
