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
