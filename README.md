# flyLabel.js - [DEMO](http://athaeryn.github.com/flyLabel.js)

### _Your labels wish they were this fly_

Inspired by [Matt Smith's float label
concept](http://mattdsmith.com/float-label-pattern/).

It's not the goal of this plugin to look like the FloatLabel concept.
In fact, the goal is not to look like anything at all. The style,
transitions, and animations are all determined by CSS. There are several
examples in the [demo](http://athaeryn.github.io/flyLabel.js).

## Get it

You'll probably want to download the minified version in `dist/`.

        $ curl -O https://raw.github.com/athaeryn/flyLabel.js/dev/dist/flyLabel.min.js

## Use it

This snippet from the demo is pretty self-explanatory:

``` html
<script src="/demo/vendor/jquery.min.js"></script>
<script src="/dist/flyLabel.min.js"></script>
<script>
  if (Modernizr.input.placeholder) {
    $('body').flyLabels();
  }
</script>
```

Of course, a little more explanation can't hurt, right? You can call
`flyLabels()` on a container element, and all the elements with class
`.fly__group` will be automagically made awesome. I'm going to get around to
writing more thorough documentation on this soon, but the demo should be helpful for
now.

## Contributing

If you'd like to contribute a behavior to the demo, follow the guide below. If
you'd like to contribute to the project in general, the information below is
probably still worth a read.


1. Clone the repository

        $ git clone https://github.com/athaeryn/flyLabel.js.git
        $ cd flyLabel.js

2. Run Bundle

        $ bundle

3. Start Guard

        $ bundle exec guard

4. Add a file to `demo/behaviors/`

        $ $EDITOR demo/behaviors/new-behavior-name.css

    Use one of the existing files as a guide, and check `demo/style.css` for
    any styles that are applied to all of the labels. Add a line at the top of
    your new behavior's file with your name and GitHub username, e.g.
    `/* by Mike Anderson - athaeryn */`

5. Submit a Pull Request

## Thank You

These people were tremendously helpful in the creation of this plugin:

- [audionerd](https://github.com/audionerd)
- [wfendler](https://github.com/wfendler)
- [mckennedy](https://github.com/mckennedy)
- [tjdunklee](https://github.com/tjdunklee)
