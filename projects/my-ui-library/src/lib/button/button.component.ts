import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
type Size = 'sm' | 'md' | 'lg';
@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() size: Size = 'sm';

}
