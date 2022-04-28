<script>
	// https://www.mathpages.com/home/kmath043.htm
	import Keyboard from './Keyboard.svelte';
	import {save} from './save-svg.js';
	
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

<div>
	<label for="octave_width">Octave Width</label>
	<input id="octave_width" type=number bind:value={octaveWidth}>
</div>
<div>
	<label for="octave_width">Black Key Height</label>
	<input id="octave_width" type=number bind:value={blackKeyHeight}>
</div>
<div>
	<label for="octave_width">White Key Height</label>
	<input id="octave_width" type=number bind:value={whiteKeyHeight}>
</div>
<div>
	<button on:click={ev => save(svg)}>
		Save
	</button>
	<button on:click={reset}>
		Reset
	</button>
</div>

<Keyboard {octaveWidth} {blackKeyHeight} {whiteKeyHeight} bind:svg />
