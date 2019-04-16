import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: "td[paApplyColor]"
})
export class PaCellColor {
    
    @HostBinding("class")
    bgClass: String = "";

    setColor(dark: Boolean) {
        this.bgClass = dark ? "bg-inverse" : "";
    }
}