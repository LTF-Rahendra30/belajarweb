// Character Game

class Character{
    constructor(name,health,posisition){
        this.name = name;
        this.health = health;
        this.posisition = posisition;
    }

    canMove(){
        console.log(`${this.name} moves to ${this.posisition}`);
    }
}

// ============= CHILD CLASS ===========
 
class Monster extends Character {
  canAttack() {
    console.log(`${this.name} attacks with a weapon!`);
  }
}
 
class Guardian extends Character {
  canDefend() {
    console.log(`${this.name} defends with a shield!`);
  }
}
 
class Wizard extends Character {
  canCastSpell() {
    console.log(`${this.name} casts a magic spell!`);
  }
}