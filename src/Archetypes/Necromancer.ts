import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType ;
  private static _count = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._count += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._count;
  }
    
  get energyType(): EnergyType {
    return this._energyType;
  }
}
export default Necromancer;
