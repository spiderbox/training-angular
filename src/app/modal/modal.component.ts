import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import {ModalDirective} from '../modal.directive'
import {ModalAddComponent} from '../post/modal-add/modal-add.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() component: any

  @ViewChild(ModalDirective, {static: true}) appModal: ModalDirective
  constructor(private componentFacetoryResolve: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent()
  }

  loadComponent() {
    const componentFactory = this.componentFacetoryResolve.resolveComponentFactory(ModalAddComponent)

    const viewContainerRef = this.appModal.viewContainerRef
    viewContainerRef.clear()

    const componentRef = viewContainerRef.createComponent(componentFactory)


  }

}
