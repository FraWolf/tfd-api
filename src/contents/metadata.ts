import { APIResponse, Languages } from "../types/general";
import { httpRequest } from "../utils";

export class Metadata {
  constructor(private url: string, private default_language: Languages) {}

  /**
   * Retrieve descendant metadata
   * @param language_code Languages
   * @returns
   */
  public getDescendant(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/descendant.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve weapon metadata
   * @param language_code Languages
   * @returns
   */
  public getWeapon(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/weapon.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve module metadata
   * @param language_code Languages
   * @returns
   */
  public getModule(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/module.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve Reactor metadata
   * @param language_code Languages
   * @returns
   */
  public getReactor(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/reactor.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve external component metadata
   * @param language_code Languages
   * @returns
   */
  public getExternalComponent(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/external-component.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve Difficulty Level Rewards metadata
   * @param language_code Languages
   * @returns
   */
  public getReward(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/reward.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve base stat metadata
   * @param language_code Languages
   * @returns
   */
  public getStat(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/stat.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve Void Intercept Battle metadata
   * @param language_code Languages
   * @returns
   */
  public getVoidBattle(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/void-battle.json`;
    return httpRequest(endpoint);
  }

  /**
   * Retrieve Title metadata
   * @param language_code Languages
   * @returns
   */
  public getTitle(language_code: Languages = this.default_language): Promise<APIResponse<any>> {
    const endpoint = `${this.url}/static/tfd/meta/${language_code}/title.json`;
    return httpRequest(endpoint);
  }
}
