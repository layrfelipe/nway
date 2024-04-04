import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    public isOpen = signal<boolean>(false)
    
    constructor() { }

    closeMenu() {
        this.isOpen.set(false)
    }

    openMenu() {
        this.isOpen.set(true)
    }
}