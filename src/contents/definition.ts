import { WeaponDefinitionGetter } from "./definitions/weapon";
import type { Languages } from "../types/general";
import type {
  IDescendant,
  IModule,
  IReactor,
  IWeapon,
  IExternalComponent,
  IReward,
  IStat,
  IVoidBattle,
  ITitle,
} from "../types/static";
import type { Metadata } from "./metadata";

export interface DefinitionsStorage {
  descendants: IDescendant[];
  weapons: IWeapon[];
  modules: IModule[];
  reactors: IReactor[];
  externalComponents: IExternalComponent[];
  rewards: IReward[];
  stats: IStat[];
  voidBattles: IVoidBattle[];
  titles: ITitle[];
}

export class Definitions {
  private storage: Partial<DefinitionsStorage> = {};

  public weapons: WeaponDefinitionGetter;

  constructor(
    private metadata: Metadata,
    private default_language: Languages,
    private definitions_refresh: boolean,
    private definitions_refresh_timer: number
  ) {
    this.weapons = new WeaponDefinitionGetter();

    // Update definitions
    this.load_definitions({
      refresh: this.definitions_refresh,
      onEnd: () => {
        if (this.storage.weapons) this.weapons.update(this.storage.weapons);
      },
    });
  }

  public load_definitions(options: { refresh: boolean; onEnd?: () => void } = { refresh: false }) {
    if (options?.refresh) {
      // console.log("[TFD-Api] Enabled definitions auto refresh");
      setTimeout(() => this.load_definitions(options), this.definitions_refresh_timer);
    }

    Promise.all([
      this.metadata.getDescendant(this.default_language),
      this.metadata.getWeapon(this.default_language),
      this.metadata.getModule(this.default_language),
      this.metadata.getReactor(this.default_language),
      this.metadata.getExternalComponent(this.default_language),
      this.metadata.getReward(this.default_language),
      this.metadata.getStat(this.default_language),
      this.metadata.getVoidBattle(this.default_language),
      this.metadata.getTitle(this.default_language),
    ])
      .then(([descendants, weapons, modules, reactors, externalComponents, rewards, stats, voidBattles, titles]) => {
        this.storage = { descendants, weapons, modules, reactors, externalComponents, rewards, stats, voidBattles, titles };

        if (options?.onEnd) options.onEnd();
      })
      .catch((e) => {
        console.log("[TFD-Api] Unable to load definitions:", e);
      });
  }
}
