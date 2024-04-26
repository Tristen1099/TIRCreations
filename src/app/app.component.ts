import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TIRCreations';

  hamburgerClick() {
    const element = document.getElementById("hamburgerIcon");
    if (!element) {
      return;
    }

    if (element.classList.contains("is-active")) {
      element.classList.remove("is-active");
    } else {
      element.classList.add("is-active");
    }
  }

  @HostListener('window:load', ['$event'])
  onLoadHandler() {
    [].map.call(
      document.querySelectorAll('nav-link'),
      ((item: Element) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active')
        }
      })
    )
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler() {
    window.scrollTo(0, 0);
  }

}
