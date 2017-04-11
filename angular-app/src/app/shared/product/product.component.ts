import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() isSoldOut: boolean;
  @Output() onBuyClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleBuyClick() {
    this.onBuyClick.emit(this.id);
  }
}
