import type { IWeapon } from "../../types";
import type { BasicDefinitionGetter } from "../../utils";

export class WeaponDefinitionGetter implements BasicDefinitionGetter<IWeapon> {
  constructor(private data_container: IWeapon[] = []) {}

  public get(item_id: string): IWeapon | null {
    if (!this.data_container) return null;
    return this.data_container.find((item) => item.weapon_id === item_id) || null;
  }

  public search(item_name: string): IWeapon[] {
    if (!this.data_container) return [];
    return this.data_container.filter((item) => item.weapon_id === item_name);
  }

  public update(data: IWeapon[]) {
    this.data_container = data;
  }
}
