import { Component } from '../component/component';

export class Main extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return `
    <main class="main">
      <section class="series">
        <h2 class="section-title">Series list</h2>
      </section>
    </main>`;
  }
}

/*  Render(place: globalThis.InsertPosition) {
    super.render(place);
    new ShowsPending('.section-title', this.shows);
    new ShowsWatched('.series-pending', this.shows);
  }
} */
