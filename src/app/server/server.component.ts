import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
})
export class ServerComponent {
    variable1: number = 100;
    serverId: number = 10;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus;
    }
}
