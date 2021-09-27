
import { _decorator, Component, systemEvent, SystemEvent, EventTouch, Touch, director, macro, Vec2, Node, Vec3, Quat, clamp, Prefab, log } from 'cc';
import { Sumo } from './Sumo';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {

    startLoc: Vec2;
    endLoc: Vec2;

    @property({
        type: Node
    })
    sumo: Node;

    onLoad() {

        macro.ENABLE_MULTI_TOUCH = false;
        director.preloadScene('GameScene');
    }

    start() {
        // Created for rotating the character
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
    }

    touchStart(touch: Touch) {
        this.startLoc = touch.getLocation();
    }

    touchMove(touch: Touch) {
        let loc = touch.getLocationX();
        let dist = this.startLoc.x - loc;
        let angle = clamp(dist, -360, 360);
        log(angle);
        this.sumo.rotation = Quat.fromEuler(new Quat(), -90, 0, this.sumo.rotation.z + angle);
        // this.sumo.rotation = Quat.rotateZ(new Quat(), this.node.rotation, this.currAngle * Math.PI / 180)
    }

    startGame(): void {
        director.loadScene('GameScene');
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
    }
}