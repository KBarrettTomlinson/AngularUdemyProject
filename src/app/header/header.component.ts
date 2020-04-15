import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter();
  constructor() { }

  collapsed = true;

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }

}
