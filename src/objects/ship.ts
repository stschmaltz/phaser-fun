import { CONST } from "../const/const";
import { GameObjectParams } from "./types";

export class Ship extends Phaser.GameObjects.Graphics {
    private velocity: Phaser.Math.Vector2;
    private cursors: any;

    public getBody(): any {
        return this.body;
    }

    constructor(params: GameObjectParams) {
        super(params.scene, params.opt);

        // init ship
        this.initShip();

        // input
        this.cursors = this.scene.input.keyboard.createCursorKeys();

        // physics
        this.scene.physics.world.enable(this);

        this.scene.add.existing(this);
    }

    private initShip(): void {
        const shipSize = 20;

        // define ship properties
        this.x = this.scene.sys.canvas.width / 2;
        this.y = this.scene.sys.canvas.height / 2;
        this.velocity = new Phaser.Math.Vector2(0, 0); // TODO figure out why I can't just do this in initShip() (gives error)

        // define ship graphics and draw it
        this.lineStyle(1, 0xffffff);

        this.strokeTriangle(
            -shipSize,
            shipSize,
            shipSize,
            shipSize,
            0,
            -shipSize
        );
    }

    public update(): void {
        if (this.active) {
            this.handleInput();
        }

        this.applyForces();
        this.checkIfOffScreen();
    }

    private handleInput(): void {
        if (this.cursors.up.isDown) {
            this.boost();
        }

        if (this.cursors.right.isDown) {
            this.rotation += 0.06;
        } else if (this.cursors.left.isDown) {
            this.rotation -= 0.06;
        }
    }

    private boost(): void {
        // create the force in the correct direction
        const force = new Phaser.Math.Vector2(
            Math.cos(this.rotation - Math.PI / 2),
            Math.sin(this.rotation - Math.PI / 2)
        );

        // reduce the force and apply it to the velocity
        force.scale(0.55);
        this.velocity.add(force);
    }

    private applyForces(): void {
        console.log("howdy", { x:this.x, y: this.y });
        // apple velocity to position
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // reduce the velocity
        this.velocity.scale(0.91);
    }

    private checkIfOffScreen(): void {
        // horizontal check
        if (this.x > this.scene.sys.canvas.width + CONST.SHIP_SIZE) {
            this.x = -CONST.SHIP_SIZE;
        } else if (this.x < -CONST.SHIP_SIZE) {
            this.x = this.scene.sys.canvas.width + CONST.SHIP_SIZE;
        }

        // vertical check
        if (this.y > this.scene.sys.canvas.height + CONST.SHIP_SIZE) {
            this.y = -CONST.SHIP_SIZE;
        } else if (this.y < -CONST.SHIP_SIZE) {
            this.y = this.scene.sys.canvas.height + CONST.SHIP_SIZE;
        }
    }
}
