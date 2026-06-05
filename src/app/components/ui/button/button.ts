import { Component, Input,Output, EventEmitter } from '@angular/core';
import { ButtonInterface } from '../../../interfaces/ui';
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button implements ButtonInterface {

  @Input() text: string = '';
  @Input() type: 'default' | 'primary' | 'secondary' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() infoevent = new EventEmitter<string>();

  get buttonClasses(): string {
    return `btn btn-${this.type} btn-${this.size}`;
  }

  notifica() {
    this.infoevent.emit('Mamma, ho premuto il pulsante!');
  }
}
