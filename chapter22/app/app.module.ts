import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { MessageModule } from "./messages/message.module";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

@NgModule({
    imports: [BrowserModule, CoreModule, MessageModule, routing],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}