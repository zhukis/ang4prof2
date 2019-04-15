import { Component, EventEmitter, Output, ViewEncapsulation } from "@angular/core";
import { ProductFormGroup } from "./form.model";
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
    selector: "paProductForm",
    templateUrl: "app/productForm.component.html",
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    constructor(private model: Model) {}

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }

}