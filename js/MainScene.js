import CardDraggable from '../js/CardDraggable.js';
export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('armor' , 'assets/armor.png');
        this.load.image('card' , 'assets/card.png');
        this.load.image('dead' , 'assets/dead.png');
        this.load.image('deathknight' , 'assets/deathknight.png');
        this.load.image('firedrake' , 'assets/firedrake.png');
        this.load.image('goldendragon' , 'assets/goldendragon.png');
        this.load.image('healingpotion' , 'assets/healingpotion.png');
        this.load.image('kobold' , 'assets/kobold.png');
        this.load.image('paladin' , 'assets/paladin.png');
        this.load.image('playercard' , 'assets/playercard.png');
        this.load.image('restartbutton' , 'assets/restartbutton.png');
        this.load.image('shield' , 'assets/shield.png');
        this.load.image('troll' , 'assets/troll.png');
        this.load.image('ogre' , 'assets/ogre.png');
        this.load.bitmapFont('pressstartfont' , 'assets/pressstartfont.png' , 'assets/pressstartfont.fnt');
    }

    create() {
        this.player = new CardDraggable({
            scene:this,
            x:this.game.config.width / 2,
            y:this.game.config.height - 200,
            name:'Paladin',
            card: 'playercard',
            image: 'paladin',
            depth: 1,
            ondragend: (pointer, gameObject) => {}
        });
    }

}
