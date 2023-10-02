import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = () => {
    // ChartJS.defaults.plugins.legend.display = false;
    const userData = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'Penduduk',
                data: [-80, -40, -90, 60, -20, 20, -100],
                backgroundColor: '#2161D5',
                borderColor: '#2161D5',
                borderWidth: 3,
                tension: 0.4,
                pointStyle: 'circle',
                pointRadius: 4,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            responsive: true,
        },
        scales: {
            y: {
                min: -100,
                max: 100,
                ticks: {
                    stepSize: 40,
                },
            },
        },
    };

    return <Line options={options} data={userData} />;
};

export default LineChart;
