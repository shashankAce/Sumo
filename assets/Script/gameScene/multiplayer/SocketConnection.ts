
import { _decorator } from 'cc';
import { Client, Room } from 'colyseus.js';

const { ccclass } = _decorator;

@ccclass('SocketConnection')
export class SocketConnection {

    client: Client;
    playerName: string;
    isConnected: boolean;
    room: Room;

    connect(afterConnnect: Function) {

        let domain = window.location.href.split('/')[2];
        let url = "ws://" + domain.split(':')[0] + ':2567';

        this.client = new Client(url);

        this.client.create('SumoRoom').then(room => {

            this.isConnected = true;
            this.onConnect(room);

            afterConnnect();

            console.log("Room Created Successfully", room);


        }).catch((e) => {
            console.log(e);
        });
    }

    onConnect(room: Room) {
        this.room = room;




    }
}
