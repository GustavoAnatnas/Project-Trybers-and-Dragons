import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const receivedDamage = this._lifePoints - attackPoints;

    if (receivedDamage > 0) {
      this._lifePoints -= receivedDamage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): number {
    const attackPoints = this._strength;
    return enemy.receiveDamage(attackPoints);
  }
}

export default Monster;