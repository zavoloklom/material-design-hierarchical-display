# [Material Design Hierarchical Display 1.0.1](http://zavoloklom.github.io/material-design-hierarchical-display)

[![Material Design Hierarchical Display](http://zavoloklom.github.io/material-design-hierarchical-display/img/Material-Design-Hierarchical-Display.png)](http://zavoloklom.github.io/material-design-hierarchical-display/)

#### The jQuery plugin for Material Design hierarchical display animation effect

## Install
**Download:**    [1.0.1 (ZIP)](https://github.com/zavoloklom/material-design-hierarchical-display/releases/download/1.0.1/material-design-hierarchical-display.zip)   
**Bower:**       `bower install material-design-hierarchical-display`   
**NPM:**         `npm install material-design-hierarchical-display`

## Usage

#### Add CSS and JS files to your page:
```html
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="zmd.hierarchical-display.min.css">

<!-- You need to include jquery.zmd.hierarchical-display.js after jQuery. Requires jQuery 1.7+. -->
<script src="jquery.js"></script>
<!-- Compiled and minified JavaScript -->
<script src="jquery.zmd.hierarchical-display.min.js"></script>
```

#### Stylesheet

The MD Hierarchical Display plugin utilizes a few classes to handle the heavy lifting:

`.zmd-hierarchical-display` hides the content   
`.zmd-hierarchical-display.in` shows the content   
`.zmd-hierarchical-displaying` is added when the animation starts, and removed when it finishes   

These classes can be found in `component.less`.  

You don't need to add the class `zmd-hierarchical-display` to the displaying element - it will be added automaticly. 
If you'd like it to default close, add class `zmd-hierarchical-display`, for default open, add the additional class `in`.

Also it require CSS animation from `animation.less`. But you can easily change it to your favorite animation library - for example [animate.css](https://github.com/daneden/animate.css).    
[Demo with animate.css on CodePen]()

#### Via data attributes

You can add `data-animation="hierarchical-display"` to parent element and on event `document.ready` animation started.

Also you can add `data-toggle="hierarchical-display"` and a `data-target` to the element to automatically assign control of a hierarchical displaying element. The `data-target` attribute accepts a CSS selector to apply the display to. 

All options of the plugin can be set via the corresponding data attributes, for example: `data-speed` for `speed` option or `data-animation-in` for `animationIn` option.

#### Via JavaScript

```JavaScript
$('.zmd-hierarchical-display').hierarchicalDisplay();
```

#### Options

#####**action**: `string`   
Method that should be executed when you call the plugin.  
_default_: `show`   

#####**speed**: `number`   
Plugin speed. You can use decimal values, for example: `0.1`.  
_default_: `5`   

#####**animationIn**: `string`   
Animation CSS class that should be added to displaying element when element is showing.
_default_: `zoomIn`   

#####**animationOut**: `string`   
Animation CSS class that should be added to displaying element when element is hiding.  
_default_: `zoomOut`   

#####**debug**: `boolean`   
Spams your console with information about the events.   
_default_: `false`   

#### Methods

#####**.hierarchicalDisplay(options)**:   
Initializes the plugin with an optional options object and starts working.   

```JavaScript
$('.zmd-hierarchical-display').hierarchicalDisplay({
  speed: 10
})
``` 

#####**.hierarchicalDisplay('show')**:   
Shows a displaying element.

#####**.hierarchicalDisplay('hide')**:   
Hides a displaying element.   

#####**.hierarchicalDisplay('toggle')**:   
Toggles a displaying element to shown or hidden.  

#### Events

Bootstrap's collapse class exposes a few events for hooking into collapse functionality.   

#####**show.zmd.hierarchicalDisplay**:   
This event fires immediately when the `show` instance method is called. 

#####**shown.zmd.hierarchicalDisplay**:   
This event is fired when a displaying element has been made visible to the user (will wait for CSS animations to complete).

#####**hide.zmd.hierarchicalDisplay**:   
This event fires immediately when the `hide` instance method is called. 

#####**hidden.zmd.hierarchicalDisplay**:   
This event is fired when a displaying element has been hidden from the user (will wait for CSS animations to complete).

```JavaScript
$('#myDisplayingElement').on('shown.zmd.hierarchicalDisplay', function () {
  // do something…
})
``` 

#### Version number

The version of plugin can be accessed via the VERSION property of the plugin's constructor:

```JavaScript
$.fn.hierarchicalDisplay.Constructor.VERSION // => "1.0.1"
``` 

## Licence
The MIT License (MIT). Please see [License File](LICENSE) for more information.

## Browser Support
- Chrome 4+   
- Firefox 16+   
- Opera 12.1+   
- Safari 4+   
- IE 10+   
- Android Browser 4+   
- Not supported in Opera Mini   

Browser support specified in accordance to [caniuse.com](http://caniuse.com/) portal (you can check [CSS3 2D Transforms](http://caniuse.com/#feat=transforms2d) and [animation](http://caniuse.com/#feat=css-animation)).

## Changelog
v1.0.1:   
- make some internal optimizations   

## Versioning
Material Design Hierarchical Display will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:   
`<major>.<minor>.<patch>`

## Author
- Email: s.kupletsky@gmail.com
- Twitter: https://twitter.com/zavoloklom
- GitHub: https://github.com/zavoloklom
- CodePen: http://codepen.io/zavoloklom
- Dribble: https://dribbble.com/zavoloklom

## Donate
- You can support me via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=s%2ekupletsky%40gmail%2ecom&lc=US&item_name=Material%20Design%20Iconic%20Font&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted), [WebMoney](https://funding.webmoney.ru/material-design-hierarchical-display/donate) or [Gratipay](http://gratipay.com/zavoloklom/)