
import { _decorator, Component, Vec3, Node, macro } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Player
 * DateTime = Fri Sep 24 2021 14:15:01 GMT+0530 (India Standard Time)
 * Author = shashankA
 * FileBasename = Player.ts
 * FileBasenameNoExtension = Player
 * URL = db://assets/Script/Player.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
const CELL_TIME = 0.016;
const SPEED = 4;

@ccclass('Player')
export class Player extends Component {


    @property({ type: Node })
    playerCamera: Node = null;
    private _vector: Vec3 = Vec3.ZERO;
    private _vectorAngle: Vec3 = Vec3.ZERO;
    private _now_time = 0;

    touchCallBack(vector: Vec3, angle: number) {
        Vec3.rotateZ(vector, vector, Vec3.ZERO, this.playerCamera.eulerAngles.y * macro.RAD);
        this._vector = vector.normalize();
        
        if (angle) {
            this.node.eulerAngles = new Vec3(0, angle + 90 + this.playerCamera.eulerAngles.y, 0);
        }
    }

    touchAngleCallBack(vector: Vec3, angle: number) {
        this._vectorAngle = vector.normalize();
    }

    fix_update(dt: number) {
        if (this._vector.lengthSqr() > 0) {
            this.node.setPosition(this.node.position.add3f(this._vector.x * SPEED * dt, 0, -this._vector.y * SPEED * dt));
            this.playerCamera.setPosition(this.playerCamera.position.add3f(this._vector.x * SPEED * dt, 0, 0));
        }

        if (this._vectorAngle.lengthSqr() > 0) {
            this.playerCamera.eulerAngles = this.playerCamera.eulerAngles.add3f(0, -this._vectorAngle.x, 0);
        }
    }

    update(deltaTime: number) {
        this._now_time += deltaTime;
        while (this._now_time >= CELL_TIME) {
            this.fix_update(CELL_TIME);
            this._now_time -= CELL_TIME;
        }
    }
}