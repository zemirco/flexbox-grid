# Flexbox Grid

Grid system built on top of [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).
Heavily influenced by [Bootstrap](http://getbootstrap.com/css/#grid).

Perfect partner for [Topcoat](http://topcoat.io/) but it can be used with or without any framework you want.
Since it was developed for small screens there are no responsive features. That might change in the future though.

## Example

Check out the [live demo]() or take a look at the [example folder]().

## How to use

Flexbox grid uses classes like Bootstrap so you don't have to learn anything new.

```html
<div class="row">
  <div class="col-1">
    col-1
  </div>
</div>

<div class="row">
  <div class="col-6">
    col-6
  </div>
</div>

<div class="row">
  <div class="col-2 col-offset-6">
    col-2 col-offset-6
  </div>
</div>
```

There are also classes that fill the available space automatically.

```html
<div class="row">
  <div class="col-auto">
    col-auto
  </div>
  <div class="col-auto">
    col-auto
  </div>
  <div class="col-auto">
    col-auto
  </div>
</div>
```

## Inspiration

 - [ptb2.me/flexgrid](http://ptb2.me/flexgrid/)
 - [codepen.io/marcolago/pen/lqGFb](http://codepen.io/marcolago/pen/lqGFb)
 - [philipwalton.github.io/solved-by-flexbox/demos/grids](http://philipwalton.github.io/solved-by-flexbox/demos/grids/)
 - [davidwalsh.name/stylus-grid](http://davidwalsh.name/stylus-grid)

## Development

Make your changes in `flexbox-grid.styl` and run `grunt` to compile `flexbox-grid.css` and `flexbox-grid.min.css`

## License

Copyright (C) 2013 [Mirco Zeiss](mailto: mirco.zeiss@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.