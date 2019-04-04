import { Component } from "@angular/core";
import { ProductRepository } from "app/model/product.repository";
import { Product } from "app/model/product.model";

@Component({
    moduleId: module.id,
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    constructor(private repository: ProductRepository) {}

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}