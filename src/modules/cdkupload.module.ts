import { NgModule, ModuleWithProviders } from '@angular/core';

import { SumService } from '../services/sum.service';


import {MatCommonModule, MatRippleModule } from '@angular/material/core';

@NgModule({
    
    imports
    : [
        MatCommonModule,

        MatRippleModule
    ],
    declarations: [
        // Pipes.
        // Directives.
        // Components.
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class MatUpload {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MatUpload,
            providers: [SumService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: MatUpload,
            providers: [SumService]
        };
    }

}
