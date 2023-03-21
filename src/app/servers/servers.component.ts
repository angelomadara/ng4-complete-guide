import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.scss"],
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverContructionStatus = "No server created";
    serverName = "";

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {}

    onCreateServer() {
        this.serverContructionStatus = "Server now created";
    }

    onUpdateServer(event: Event) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
