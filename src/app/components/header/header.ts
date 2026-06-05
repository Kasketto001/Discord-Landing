import { Component } from '@angular/core';
import { Button } from '../ui/button/button';
@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  message: string = '';

  onButtonClick(evento: string): void {
    this.message = evento;
    console.log('Button clicked:', evento);
  }
}
