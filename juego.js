var juego = new Phaser.Game(290,540,Phaser.CANVAS, 'runner');
juego.state.add('Juego', Juego);
juego.state.start('Juego');