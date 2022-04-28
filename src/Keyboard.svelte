<script>
  export let octaveWidth = 161;
  export let blackKeyHeight = 80;
  export let whiteKeyHeight = 120;
  export let svg = undefined;

  $: W = octaveWidth / 7;
  $: B = octaveWidth / 12;
  $: nar3 = W - (B * 2) / 3;
  $: nar4 = W - (B * 3) / 4;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xml:space="preserve"
  width={octaveWidth}
  height={whiteKeyHeight}
  bind:this={svg}
>
  <!--      
		See http://www.mathpages.com/home/kmath043.htm
     for the math.
     
     This keyboard has following properties (x=octave width).
     1. All white keys have equal width in front (W=x/7).
     2. All black keys have equal width (B=x/12).
     3. The narrow part of white keys C, D and E is W - B*2/3
     4. The narrow part of white keys F, G, A, and B is W - B*3/4 -->

  <!--  White keys   -->
  {#each Array(7) as _, row}
    <rect
      style="fill:white;stroke:black"
      x={W * row}
      y="0"
      width={W}
      height={whiteKeyHeight}
    />
  {/each}

  <!--  Black keys (overlap with the white keys)  -->
  <!-- 	The narrow part of white keys C, D and E is W - B*2/3 -->
  {#each Array(2) as _, row}
    <rect
      style="fill:black;stroke:black"
      x={nar3 * (row + 1) + B * row}
      y="0"
      width={B}
      height={blackKeyHeight}
    />
  {/each}

  <!-- 	The narrow part of white keys F, G, A, and B is W - B*3/4 -->
  {#each Array(3) as _, row}
    <rect
      style="fill:black;stroke:black"
      x={W * 3 + nar4 * (row + 1) + B * row}
      y="0"
      width={B}
      height={blackKeyHeight}
    />
  {/each}
</svg>
