# Topcoat Grid

Grid system built on top of [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

## How to use

```html
<div class="topcoat-grid">
    <div class="topcoat-grid__row">
    <div class="topcoat-grid__column--1">
        1 Column
    </div>
    </div>

    <div class="topcoat-grid__row">
    <div class="topcoat-grid__column--6">
        6 Columns
    </div>
    </div>

    <div class="topcoat-grid__row">
    <div class="topcoat-grid__column--2 topcaot-grid__offset--6">
        2 Columns Offset 6
    </div>
    </div>
</div>
```

There are also classes that fill the available space automatically.

```html
<div class="topcoat-grid">
    <div class="topcoat-grid__row">
    <div class="topcoat-grid__column--auto">
        Auto Column
    </div>
    <div class="topcoat-grid__column--auto">
        Auto Column
    </div>
    <div class="topcoat-grid__column--auto">
        Auto Column
    </div>
    </div>
</div>
```

## Inspiration

 - [flexbox-grid by @zeMicro](https://github.com/zeMirco/flexbox-grid)
 - [ptb2.me/flexgrid](http://ptb2.me/flexgrid/)
 - [codepen.io/marcolago/pen/lqGFb](http://codepen.io/marcolago/pen/lqGFb)
 - [philipwalton.github.io/solved-by-flexbox/demos/grids](http://philipwalton.github.io/solved-by-flexbox/demos/grids/)
 - [davidwalsh.name/stylus-grid](http://davidwalsh.name/stylus-grid)

## Development

Make your changes in `src/grid.styl` and run `grunt` to compile `css/grid.css` and `css/grid.min.css`

