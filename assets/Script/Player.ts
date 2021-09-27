
import { _decorator, Component, Vec3, systemEvent, SystemEvent, EventMouse, Animation, clamp, Quat, Camera } from 'cc';
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

@ccclass('Player')
export class Player extends Component {

    private _startJump: boolean = false;
    private _jumpStep: number = 0;
    private _curJumpTime: number = 0;
    private _jumpTime: number = 0.1;
    private _curJumpSpeed: number = 0;
    private _curPos: Vec3 = new Vec3();
    private _deltaPos: Vec3 = new Vec3(0, 0, 0);
    private _targetPos: Vec3 = new Vec3();
    private _isMoving = false;

    private angleX = 0;
    private angleY = 0;


    @property({ type: Camera })
    playerCamera: Camera = null;


    start() {
        systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    onMouseUp(event: EventMouse) {
        if (event.getButton() === 0) {
            this.jumpByStep(1);
        } else if (event.getButton() === 2) {
            this.jumpByStep(2);
        }
    }

    onMouseMove(event: EventMouse) {

        this.angleX += -event.movementX;
        this.angleY += -event.movementY;
        // this.angleY = clamp(this.angleY, this.xAxisMin, this.xAxisMax);

        // this.playerCamera.rotation = Quat.fromEuler(new Quat(), this.angleY, this.angleX, 0);
        return;

    }

    jumpByStep(step: number) {
        if (this._isMoving) {
            return;
        }
        this._startJump = true;
        this._jumpStep = step;
        this._curJumpTime = 0;
        this._curJumpSpeed = this._jumpStep / this._jumpTime;
        this.node.getPosition(this._curPos);
        Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0));

        this._isMoving = true;
    }

    update(deltaTime: number) {
        
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
