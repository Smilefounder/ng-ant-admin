import {NgModule} from '@angular/core';
import {StepRoutingModule} from './step-routing.module';
import {StepComponent} from './step.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [StepComponent],
  imports: [
    SharedModule,
    StepRoutingModule,
  ]
})
export class StepModule {
}
