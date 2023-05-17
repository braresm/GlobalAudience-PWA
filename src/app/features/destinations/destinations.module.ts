import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations.component';
import { DestinationCardComponent } from './components/destination-card/destination-card.component';

// Custom modules
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DestinationsComponent, DestinationCardComponent],
  imports: [CommonModule, DestinationsRoutingModule, SharedModule],
})
export class DestinationsModule { }
