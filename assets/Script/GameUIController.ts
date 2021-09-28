
import { _decorator, Component, Node, Vec2, EventTouch, macro, UITransform, Vec3, EventHandler } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameUIController
 * DateTime = Tue Sep 28 2021 19:04:24 GMT+0530 (India Standard Time)
 * Author = shashankA
 * FileBasename = GameUIController.ts
 * FileBasenameNoExtension = GameUIController
 * URL = db://assets/Script/GameUIController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('GameUIController')
export class GameUIController extends Component {

    startLoc: Vec2;

    @property({
        type: [EventHandler],
        tooltip: 'Touch Drag'
    })
    touchEventCallBack: EventHandler[] = [];

    start() {
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.touchEnded, this);
    }

    touchMove(touch: EventTouch) {
        let loc = touch.getUILocation();
        let pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(loc.x, loc.y));

        let angle = Math.atan2(pos.y, pos.x);
        this.touchEventCallBack.forEach(c => c.emit([pos, angle * macro.DEG]));
    }

    touchEnded(touch: EventTouch) {
        this.touchEventCallBack.forEach(c => c.emit([new Vec3(0, 0, 0)]));
    }

    touchStart(touch: EventTouch) {
        this.touchMove(touch);
    }

}