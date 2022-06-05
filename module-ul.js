
// Polyfill Element.scrollTo() for Safari
import '../dom/polyfills/element.scrollto.js';

/** <ul is="slide-show-ul">

Import `./build/slide-show-ul.js` to register the customised built-in:

```html
<ul is="slide-show-ul">
    <li>…</li>
</ul>
```
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet = import.meta.url.replace(/\/[^\/]*\.js/, '/slide-show-shadow.css');

export default element('<ul is="slide-show-ul">', lifecycle, properties, stylesheet);
