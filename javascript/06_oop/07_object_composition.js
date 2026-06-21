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

// Crate object

const monster = createMonster('Monster');
monster.attack();
monster.canMove();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();
 
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
 
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();

// Output:
// Monster attack with a weapon
// Monster moves to 0
// Guardian moves to 0
// [object Object] defends with a shield!
// Wizard moves to 0
// [object Object] casts a spell!
// Warrior moves to 0
// [object Object] attack with a weapon
// [object Object] defends with a shield!