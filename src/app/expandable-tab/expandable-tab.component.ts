import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'expandable-tab',
  templateUrl: './expandable-tab.component.html',
  styleUrls: ['./expandable-tab.component.scss'],
})
export class ExpandableTabComponent implements OnInit {
  @Input() expanded = false;

  @ViewChild('tabContent') private tabContent: ElementRef;

  constructor() {}

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.tabContent) {
      this.tabContent.nativeElement.scrollTop =
        this.tabContent.nativeElement.scrollHeight;
    }
  }
}
