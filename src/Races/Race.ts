abstract class Race {
  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) { }

  static createdRacesInstances(): number {
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;