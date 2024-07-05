export enum QueryPeriod {
  Last7Days = 0,
  Last30Days = 1,
  AllTime = 2,
}

export interface RecommendationModule {
  descendant: RecommendationModuleDescendant;
  weapon: RecommendationModuleWeapon;
}

export interface RecommendationModuleDescendant {
  descendant_id: string;
  recommendation: RecommendationModuleRecommendation[];
}

export interface RecommendationModuleWeapon {
  weapon_id: string;
  recommendation: RecommendationModuleRecommendation[];
}

export interface RecommendationModuleRecommendation {
  module_id: string;
}
