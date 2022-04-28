<script>
  import Keyboard from "./Keyboard.svelte";
  import { save } from "./save-svg.js";

  let octaveWidth = 161;
  let blackKeyHeight = 80;
  let whiteKeyHeight = 120;
  let svg;

  function reset() {
    octaveWidth = 161;
    blackKeyHeight = 80;
    whiteKeyHeight = 120;
  }
</script>

<main>
  <h1>Piano Keyboard Math</h1>

  <blockquote cite="https://www.mathpages.com/home/kmath043.htm">
    If you've ever looked closely at a piano keyboard you may have noticed that
    the widths of the white keys are not all the same at the back ends (where
    they pass between the black keys). Of course, if you think about it for a
    minute, it's clear they couldn't possibly all be the same width, assuming
    the black keys are all identical (with non-zero width) and the white keys
    all have equal widths at the front ends, because the only simultaneous
    solution of 3W=3w+2b and 4W=4w+3b is with b=0.

    <a href="https://www.mathpages.com/home/kmath043.htm"
      >Read more about the math</a
    >
  </blockquote>

  <div>
    <label for="octave_width">Octave Width</label>
    <input id="octave_width" type="number" bind:value={octaveWidth} />
  </div>
  <div>
    <label for="black_keys">Black Key Height</label>
    <input id="black_keys" type="number" bind:value={blackKeyHeight} />
  </div>
  <div>
    <label for="white_keys">White Key Height</label>
    <input id="white_keys" type="number" bind:value={whiteKeyHeight} />
  </div>
  <div>
    <button on:click={() => save(svg)}>Save SVG</button>
    <button on:click={reset}>Reset</button>
  </div>

  <Keyboard {octaveWidth} {blackKeyHeight} {whiteKeyHeight} bind:svg />
</main>

<style>
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
    max-width: 600px;
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
</style>
