import Race from './Race';

class Dwarf extends Race {
  readonly _maxLifePoints: number;
  private static _count = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._count += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;