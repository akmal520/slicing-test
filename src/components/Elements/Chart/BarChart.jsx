import React from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = () => {
    const userData = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'prasarana air bersih',
                data: [180, 100, 50, 80, 130, 250, 200],
                backgroundColor: '#2161D5',
                borderWidth: 0,
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
                min: 0,
                max: 250,
                ticks: {
                    stepSize: 50,
                },
            },
        },
    };

    return <Bar options={options} data={userData} />;
};

const DoubleBarChart = () => {
    const userData = {
        labels: [
            'Dusun 1',
            'Dusun 2',
            'Dusun 3',
            'Dusun 4',
            'Dusun 5',
            'Dusun 6',
        ],
        datasets: [
            {
                label: 'laki-laki',
                data: [890, 1075, 280, 1270, 430, 975],
                backgroundColor: '#2161D5',
                borderWidth: 0,
            },
            {
                label: 'perempuan',
                data: [1400, 450, 1020, 1500, 490, 650],
                backgroundColor: '#97ACD1',
                borderWidth: 0,
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
                min: 0,
                max: 1500,
                ticks: {
                    stepSize: 325,
                },
            },
        },
    };
    return <Bar options={options} data={userData} />;
};

BarChart.DoubleBarChart = DoubleBarChart;

export default BarChart;
