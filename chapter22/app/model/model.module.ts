import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Model } from "./repository.model";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { ModelResolver } from "./model.resolver";

@NgModule({
    imports: [HttpModule],
    providers: [Model, RestDataSource, ModelResolver,
        { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` 
    }]
})
export class ModelModule {}