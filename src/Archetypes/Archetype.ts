import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    readonly name: string = '',
    readonly special: number = 0,
    readonly cost: number = 0,
  ) { }
  
  static createdArchetypeInstances(): number {
    throw Error('Not implemented');
  }
  
  abstract get energyType(): EnergyType;
}
  
export default Archetype;
