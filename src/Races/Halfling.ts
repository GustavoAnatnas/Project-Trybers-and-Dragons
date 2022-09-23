import Race from './Race';

class Halfling extends Race {
  readonly _maxLifePoints: number;
  private static _count = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._count += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;