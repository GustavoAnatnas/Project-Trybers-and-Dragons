import Race from './Race';

class Elf extends Race {
  readonly _maxLifePoints: number;
  private static _count = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._count += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;