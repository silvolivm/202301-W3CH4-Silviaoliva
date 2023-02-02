/* eslint-disable no-new */

import { Header } from './components/header/header';
import { Main } from './components/main/main';
// Import { series } from './mocks/series';
// import { SeriesStructure } from './models/series';

new Header('.container');
new Main(`.header, series`);
