import React from "react";
import GaugeChart from 'react-gauge-chart'

const GuageChart = () => {
  return (
    <div style={{height: "auto", width: 600, margin: 'auto', textAlign: 'center'}}>
      <h1>Guage chart</h1>

      <GaugeChart id="gauge-chart4"
        nrOfLevels={200}
        arcPadding={0}
        cornerRadius={0}
        percent={0.87}
        textColor={"#000000"}
      />

      <table style={{width: 600}}>
        <tbody>
        <tr>
          <th>Min</th>
          <th>Max</th>
        </tr>
        </tbody>
      </table>

    </div>
  )
}

export default GuageChart;