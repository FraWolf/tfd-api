import { Languages } from "./general";

export interface User {
  ouid: string;
}

export interface UserBasic {
  ouid: string;
  user_name: string;
  platform_type: string;
  mastery_rank_level: number;
  mastery_rank_exp: number;
  title_prefix_id?: string;
  title_suffix_id?: string;
  os_language: string;
  game_language: Languages;
}

export interface UserDescendant {
  ouid: string;
  user_name: string;
  descendant_id: string;
  descendant_slot_id: string;
  descendant_level: number;
  module_max_capacity: number;
  module_capacity: number;
  module: UserModule[];
}

export interface UserWeapon {
  ouid: string;
  user_name: string;
  weapon: Weapon[];
}

export interface UserExternalComponent {
  ouid: string;
  user_name: string;
  external_component: ExternalComponent[];
}

export interface UserReactor {
  ouid: string;
  user_name: string;
  reactor_id: string;
  reactor_slot_id: string;
  reactor_level: number;
  reactor_additional_stat: AdditionalStat[];
  reactor_enchant_level: number;
}

// --------------------------------------------------
export interface Weapon {
  module_max_capacity: number;
  module_capacity: number;
  weapon_slot_id: string;
  weapon_id: string;
  weapon_level: number;
  perk_ability_enchant_level: number;
  weapon_additional_stat: AdditionalStat[];
  module: UserModule[];
}

export interface ExternalComponent {
  external_component_slot_id: string;
  external_component_id: string;
  external_component_level: number;
  external_component_additional_stat: AdditionalStat[];
}

// --------------------------------------------------
export interface AdditionalStat {
  additional_stat_name: string;
  additional_stat_value: string;
}

export interface UserModule {
  module_slot_id: string;
  module_id: string;
  module_enchant_level: number;
}
