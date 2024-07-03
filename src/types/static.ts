export interface IDescendant {
  descendant_id: string;
  descendant_name: string;
  descendant_image_url: string;
  descendant_stat: IDescendantStat[];
  descendant_skill: IDescendantSkill[];
}

export interface IDescendantStat {
  level: number;
  stat_detail: IDescendantDetail[];
}

export interface IDescendantDetail {
  stat_type: string;
  stat_value: number;
}

export interface IDescendantSkill {
  skill_type: string;
  skill_name: string;
  element_type: string;
  arche_type: string;
  skill_image_url: string;
  skill_description: string;
}

// --------------------------------------------------

export interface IWeapon {
  weapon_name: string;
  weapon_id: string;
  image_url: string;
  weapon_type: string;
  weapon_tier: string;
  weapon_rounds_type: string;
  base_stat: IWeaponBaseStat[];
  firearm_atk: IWeaponFirearmAtk[];
  weapon_perk_ability_name: string;
  weapon_perk_ability_description: string;
}

export interface IWeaponBaseStat {
  stat_id: string;
  stat_value: number;
}

export interface IWeaponFirearmAtk {
  level: number;
  firearm: IWeaponFirearm[];
}

export interface IWeaponFirearm {
  firearm_atk_type: string;
  firearm_atk_value: number;
}

// --------------------------------------------------

export interface IModule {
  module_name: string;
  module_id: string;
  image_url: string;
  module_type: string;
  module_tier: string;
  module_socket_type: string;
  module_class: string;
  module_stat: IModuleStat[];
}

export interface IModuleStat {
  level: number;
  module_capacity: number;
  value: string;
}

// --------------------------------------------------

export interface IReactor {
  reactor_id: string;
  reactor_name: string;
  image_url: string;
  reactor_tier: string;
  reactor_skill_power: IReactorSkillPower[];
  optimized_condition_type: string;
}

export interface IReactorSkillPower {
  level: number;
  skill_atk_power: number;
  sub_skill_atk_power: number;
  skill_power_coefficient: IReactorPowerCoefficient[];
  enchant_effect: IReactorEnchantEffect[];
}

export interface IReactorPowerCoefficient {
  coefficient_stat_id: string;
  coefficient_stat_value: number;
}

export interface IReactorEnchantEffect {
  enchant_level: number;
  stat_type: string;
  value: number;
}

// --------------------------------------------------

export interface IExternalComponent {
  external_component_id: string;
  external_component_name: string;
  image_url: string;
  external_component_equipment_type: string;
  external_component_tier: string;
  base_stat: IExternalComponentBaseStat[];
  set_option_detail: IExternalComponentSetOptionDetail[];
}

export interface IExternalComponentBaseStat {
  level: number;
  stat_id: string;
  stat_value: number;
}

export interface IExternalComponentSetOptionDetail {
  set_option: string;
  set_count: number;
  set_option_effect: string;
}

// --------------------------------------------------

export interface IReward {
  map_id: string;
  map_name: string;
  battle_zone: IRewardBattleZone[];
}

export interface IRewardBattleZone {
  battle_zone_id: string;
  battle_zone_name: string;
  reward: IRewardBattleZoneReward[];
}

export interface IRewardBattleZoneReward {
  rotation: number;
  reward_type: string;
  reactor_element_type: string;
  weapon_rounds_type: string;
  arche_type: string;
}

// --------------------------------------------------

export interface IStat {
  stat_id: string;
  stat_name: string;
}

// --------------------------------------------------

export interface IVoidBattle {
  void_battle_id: string;
  void_battle_name: string;
}

// --------------------------------------------------

export interface ITitle {
  title_id: string;
  title_name: string;
}
