// Knight or Sorcerer - Guerreiro or Mago
// LittleMonster or BigMonster

class Character {

    life =    1;
    maxLife = 1;
    attack  =  0;
    defense = 0;

    constructor(name) {

      this.name = name
    }

    get life() {
        return this._life;
    }

    set life(newLife) {

        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {

    constructor(name) {
        super(name);
        this.life = 100;
        this.attack =  10;
        this.defense =   8;
        this.maxLife= this.life;
    }
}

class Socerer extends Character {

    constructor(name) {
        super(name);
        this.life =  80;
        this.attack =  15;
        this.defense =   3;
        this.maxLife= this.life;
    }
}


class LittleMonster extends Character {

    constructor() {
        super('Little Monster');
        this.life =  40;
        this.attack =  4;
        this.defense =   4;
        this.maxLife= this.life;
    }
}


class BigMonster extends Character {

    constructor() {
        super('Big Monster');
        this.life =  120;
        this.attack =  16;
        this.defense =   6;
        this.maxLife= this.life;
    }
}

class Stage {

    constructor(figther1, figther2, figther1El, fighter2El) {

        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.fighter2El = fighter2El;
      

    }

    start() {
        this.update();

       //
       this.figther1El.querySelector('.attackButton').addEventListener('click', ()=>this.doAttack(this.figther1, this.figther2) )
       this.fighter2El.querySelector('.attackButton').addEventListener('click', ()=>this.doAttack(this.figther2, this.figther1))
      

        //console.log(this.figther1El)
    
        
       }

       
    update() {
    //Figther1
    this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1.life} HP`;
    let f1Pct = (this.figther1.life / this.figther1.maxLife) * 100;
    this.figther1El.querySelector('.lifebar .bar').style.width = `${f1Pct}%`;

    //Figther2
    this.fighter2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2.life} HP`;
    let f2Pct = (this.figther2.life / this.figther2.maxLife) * 100;
    this.fighter2El.querySelector('.lifebar .bar').style.width = ` ${f2Pct}%`;

   }
    doAttack(attacking, attacked){

    console.log(`${attacking.name} est?? atacando ${attacked.name}`);
    this.update();

    }
       
};

