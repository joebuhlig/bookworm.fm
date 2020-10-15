import { Controller } from "stimulus"


export default class extends Controller {
  static targets = [ "menu" ]

  toggleMenu () {
    console.log('clicking it');
    this.menuTarget.classList.toggle('is-active');
  }
}
