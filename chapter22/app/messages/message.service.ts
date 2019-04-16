import { Message } from "./message.model";
import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {
    private handler: (m: Message) => void;

    reportMessage(msg: Message) {
        if (this.handler != null) {
            this.handler(msg);
        }
    }

    registerMessageHandler(handler: (m: Message) => void) {
        this.handler = handler;
    }
}