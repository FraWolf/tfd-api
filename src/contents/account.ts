import type { ExternalComponent, User, UserBasic, UserDescendant, UserReactor, UserWeapon } from "../types/account";
import type { APIResponse, Languages } from "../types/general";
import type { RecommendationModule } from "../types/module";

import { formatQueryStrings, httpRequest } from "../utils";

export class Account {
  constructor(private url: string, private headers: Record<string, string>, private default_language: Languages) {
    if (!headers["x-nxopen-api-key"]) throw Error("API Key is required");
  }

  /**
   * Retrieve account identifier (OUID)
   * @param user_name Nickname
   * @returns
   */
  public getId(user_name: string): Promise<APIResponse<User>> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/id`, { user_name });
    return httpRequest(endpoint, this.headers);
  }

  /**
   * Retrieves basic information.
   * @param ouid OUID
   * @returns
   */
  public getUserBasic(ouid: string): Promise<APIResponse<UserBasic>> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/user/basic`, {
      ouid,
    });
    return httpRequest(endpoint, this.headers);
  }

  /**
   * Retrieves information about the equipped descendant.
   * @param ouid OUID
   * @returns
   */
  public getUserDescendant(ouid: string): Promise<APIResponse<UserDescendant>> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/user/descendant`, {
      ouid,
    });
    return httpRequest(endpoint, this.headers);
  }

  /**
   * Retrieves information about weapons equipped in all slots.
   * @param ouid OUID
   * @param language_code language code
   * @returns
   */
  public getUserWeapon(ouid: string, language_code: Languages = this.default_language): Promise<APIResponse<UserWeapon>> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/user/weapon`, {
      ouid,
      language_code,
    });
    return httpRequest(endpoint, this.headers);
  }

  /**
   * Retrieves information about the equipped Reactor.
   * @param ouid OUID
   * @param language_code language code
   * @returns
   */
  public getUserReactor(ouid: string, language_code: Languages = this.default_language): Promise<APIResponse<UserReactor>> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/user/reactor`, {
      ouid,
      language_code,
    });
    return httpRequest(endpoint, this.headers);
  }

  /**
   * Retrieves information about external components equipped in all slots.
   * @param ouid OUID
   * @param language_code language code
   * @returns
   */
  public getUserExternalComponent(
    ouid: string,
    language_code: Languages = this.default_language
  ): Promise<APIResponse<ExternalComponent>> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/user/external-component`, {
      ouid,
      language_code,
    });
    return httpRequest(endpoint, this.headers);
  }

  /**
   * Recommends modules suited to the user.
   * @param descendant_id Descendant identifier (Refer to /meta/descendant API)
   * @param weapon_id Weapon identifier (Refer to /meta/weapon API)
   * @param void_battle_id Void Intercept Battle identifier (Refer to /meta/void-battle API)
   * @param period Query period
   * @returns
   */
  public getRecommendationModule(
    descendant_id: string,
    weapon_id: string,
    void_battle_id: string,
    period: QueryPeriod
  ): Promise<RecommendationModule> {
    const endpoint = formatQueryStrings(`${this.url}/tfd/v1/recommendation/module`, {
      descendant_id,
      weapon_id,
      void_battle_id,
      period,
    });
    return httpRequest(endpoint, this.headers);
  }
}
