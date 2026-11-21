var fondo;
var carro;
var cursores;
var enemigos;
var timer;

var gasolinas;
var timerGasolina;


var Juego = {
  preload: function(){
       juego.load.image('bg', 'img/bg.png');
       juego.load.image('carro', 'img/carro.png');
       juego.load.image('carroMalo', 'img/carroMalo.png');
       juego.load.image('gas', 'img/gas.png');
       juego.forceSingleUpdate = true;
  },

  create: function(){
     fondo = juego.add.tileSprite(0,0,290,540,'bg');
     carro = juego.add.sprite(juego.width/2,496, 'carro');
     carro.anchor.setTo(0.5);    

     enemigos = juego.add.group();
     enemigos.enableBody = true;
     enemigos.physicsBodyType = Phaser.Physics.ARCADE;
     //juego.physics.arcade.enable(enemigos, true);
     enemigos.createMultiple(20,'carroMalo');
     enemigos.setAll('anchor.x', 0.5);
     enemigos.setAll('anchor.y', 0.5);
     enemigos.setAll('outOfBoundsKill', true);
     enemigos.setAll('checkWorldBounds', true);

     gasolinas = juego.add.group();
     gasolinas.enableBody = true;
     gasolinas.physicsBodyType = Phaser.Physics.ARCADE;
     //juego.physics.arcade.enable(gasolinas, true);
     gasolinas.createMultiple(20,'gas');
     gasolinas.setAll('anchor.x', 0.5);
     gasolinas.setAll('anchor.y', 0.5);
     gasolinas.setAll('outfBoundsKill', true);
     gasolinas.setAll('checkWorlBounds', true);

     timer = juego.time.events.loop(1500, this.crearCarroMalo, this);
     timerGas = juego.time.events.loop(1500, this.crearGasolina, this);
     cursores = juego.input.keyboard.createCursorKeys();
  },

  update: function(){
         fondo.tilePosition.y +=3;
         if (cursores.right.isDown && carro.position.x <245) {
         	carro.position.x +=5;
         }else if (cursores.left.isDown && carro.position.x > 45) {
         	carro.position.x -=5;
         }
  },

  crearCarroMalo: function(){
  		var posicion = Math.floor(Math.random()*3)+1;
  		var enemigo = enemigos.getFirstDead();
  		//enemigo.physicsBodyType = Phaser.Physics.ARCADE;
  		enemigo.reset(posicion*73, 0);
  		enemigo.body.velocity.y = 200;
  		enemigo.anchor.setTo(0.5);
  },

  crearGasolina: function(){
  		var posicion = Math.floor(Math.random()*3)+1;
  		var gasolina = gasolinas.getFirstDead();
  		//gasolina.physicsBodyType = Phaser.Physics.ARCADE;
  		gasolina.reset(posicion*73, 0);
  		gasolina.body.velocity.y = 200;
  		gasolina.anchor.setTo(0.5);
  }
}
