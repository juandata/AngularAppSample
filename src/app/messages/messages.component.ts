import { Component, OnInit } from '@angular/core';
/*The MessagesComponent should display all messages, including the message sent by the HeroService when it fetches heroes.*/
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

constructor(public messageService: MessageService) {}
/*The messageService property must be public because you're about to bind to it in the template.
Angular only binds to public component properties.*/
  ngOnInit() {
  }

}
