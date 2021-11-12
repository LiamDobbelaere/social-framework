import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent implements OnInit {
  @Input() isIncoming: boolean = false;
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}
