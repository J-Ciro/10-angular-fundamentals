import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  imports: [CommonModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  // @Input() public items!: string[];
  // @Output() public onClick = new EventEmitter<string>();
  public onClick = output<string>();
  public items = input<string[]>();

  handleClick(item: string): void {
    this.onClick.emit(item);
  }
}
