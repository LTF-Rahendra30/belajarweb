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


// ============= OBJECT CREATOR FUNCTION ============

function canAttack(character){
    return {
        attack: () => {
            console.log(`${character} attack with a weapon`)
        }
    }
}
function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character} defends with a shield!`);
    }
  }
}
 
function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character} casts a spell!`);
    }
  }
}

// ============== OBJECT CREATOR ===========

function createMonster(name){
    const character = new Character(name,100,0);
    return Object.assign(character, canAttack(name));
}
function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character));
}
 
function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canCastSpell(character));
}
 
function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canDefend(character));
}
