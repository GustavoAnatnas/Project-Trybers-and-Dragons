import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType ;
  private static _count = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._count += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._count;
  }
    
  get energyType(): EnergyType {
    return this._energyType;
  }
}
export default Ranger;
