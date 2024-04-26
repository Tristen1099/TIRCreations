import { Component, HostListener } from '@angular/core';

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

jQuery(document).ready(function () {
  jQuery("a").on('click', function (this: HTMLAnchorElement, event: any) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      hash = hash.replace(/\//g, '');
      if (jQuery(hash).offset()) {
        var offset = jQuery(hash).offset();
        if (offset) {
          var scrollPos = offset.top;
          jQuery('html, body').animate({
            scrollTop: scrollPos
          }, 800, function () {
            window.location.hash = hash;
          });
        }
      }
    }
  });
});
