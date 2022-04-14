import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent implements OnInit {

  @Input() text!: string

  constructor() { }

  ngOnInit(): void {
  }

}
