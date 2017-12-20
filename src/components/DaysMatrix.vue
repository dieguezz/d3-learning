<template>
  <div id="grid">

  </div>
</template>

<script>
/* eslint-disable */
import { createBlankMatrix } from '../lib/matrix';
import * as d3 from 'd3'

const matrix = createBlankMatrix(50, 50);

export default {
  name: 'Perspective-test',
  methods: {
    isEven(n) {
      return n % 2 === 0;
    }
  },
  mounted() {
    const vm = this;

    const grid = d3.select('#grid')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    const row = grid.selectAll('.row')
      .data(matrix)
      .enter()
      .append('g')
      .attr('class', 'row');

    const column = row.selectAll('.square')
      .data(d => d)
      .enter().append('rect')
      .attr('class','square')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .style('fill', '#fff')
      .style('stroke', '#222')
      .on('click', function(d) {
        ++d.click;
        if (vm.isEven(d.click)) {
          d3.select(this).style('fill','#fff');
        } else {
          d3.select(this).style('fill','#000');
        }
      });
  }
};
</script>

  <style>
    g {
      fill: none;
      stroke: #76BF8A;
      stroke-width: 3px;
    }
    svg {
      transform: perspective(30em) rotateX(70deg);
    }
    #grid {
      height: 100vh;
    }
  </style>
