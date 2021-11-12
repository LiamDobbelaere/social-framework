import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpandableTabComponent } from './expandable-tab/expandable-tab.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';

@NgModule({
  declarations: [AppComponent, ExpandableTabComponent, ChatBubbleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
