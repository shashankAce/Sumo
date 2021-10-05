
import { _decorator, Component, Node } from 'cc';
import { Client, Room } from 'colyseus.js';

import { Constants } from './Config';
import { MiloManager } from './MiloManager';

const { ccclass, property } = _decorator;

@ccclass('SocketConnection')
export class SocketConnection extends Component {

    client: Client;
    playerName: string;
    isConnected: boolean;
    room: Room;

    connect() {
        let domain = window.location.href.split('/')[2];
        let url = "ws://" + domain.split(':')[0] + ':2567';

        this.client = new Client(url);

        this.client.create('SumoRoom').then(room => {

            this.isConnected = true;
            this.onConnect(room);
            console.log("Room Created Successfully", room);


        }).catch((e) => {
            console.log(e);
        });
    }

    onConnect(room: Room) {
        this.room = room;


    }
}
