import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '@app/home/home-routing.module';
import { HomeComponent } from '@app/home/home.component';
import {PostListComponent} from '@auth/../post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, PostListComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
