import { NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchService} from "./search.service";

import {DetailComponent} from "./detail/detail.component";



@NgModule({
    declarations: [DetailComponent],
    imports: [
        CommonModule
    ],
    providers: [SearchService]
})
export class MovieModule {}