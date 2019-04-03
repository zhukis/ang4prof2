import { Component } from "@angular/core";
import { Cart } from "app/model/cart.model";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
    constructor(public cart: Cart) {}
}