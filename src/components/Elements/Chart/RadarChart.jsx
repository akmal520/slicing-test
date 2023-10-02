import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const RadarChart = () => {
    const userData = {
        labels: [
            'Dusun 1',
            'Dusun 2',
            'Dusun 3',
            'Dusun 4',
            'Dusun 5',
            'Dusun 6',
            'Dusun 7',
        ],
        datasets: [
            {
                label: 'data 1',
                data: [14, 18, 23, 33, 35, 44, 67],
                backgroundColor: 'rgba(122, 160, 230, 0.40)',
                borderColor: '#2161D5',
                borderWidth: 1,
            },
            {
                label: 'data 2',
                data: [6, 12, 41, 52, 76, 96, 100],
                backgroundColor: 'rgba(122, 160, 230, 0.40)',
                borderColor: '#2161D5',
                borderWidth: 1,
            },
            {
                label: 'data 3',
                data: [16, 28, 47, 58, 69, 83, 92],
                backgroundColor: 'rgba(122, 160, 230, 0.40)',
                borderColor: '#2161D5',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            responsive: true,
            maintainAspectRatio: false,
        },
        scales: {
            r: {
                ticks: {
                    display: false,
                    maxTicksLimit: 8,
                },
            },
        },
    };

    return <Radar options={options} data={userData} />;
};

export default RadarChart;
