'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface ScatterPlotProps {
  onClose: () => void;
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ onClose }) => {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const data = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 5,
    }))

    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = 500 - margin.left - margin.right
    const height = 400 - margin.top - margin.bottom

    const svg = d3
      .select(ref.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width])
    const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0])

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))

    svg.append('g').call(d3.axisLeft(yScale))

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', (d) => d.size)
      .attr('fill', 'var(--primary-color)')
      .style('opacity', 0.7)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--white)',
          padding: '20px',
          borderRadius: '15px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <svg ref={ref} />
      </div>
    </div>
  )
}

export default ScatterPlot
