import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const DoughnutChart = () => {
    const userData = {
        labels: ['Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4'],
        datasets: [
            {
                label: 'Jumlah penduduk tiap dusun',
                data: [100, 90, 100, 10],
                backgroundColor: ['#2161D5', '#898BE7', '#89AFE7', '#97ACD1'],
            },
        ],
        hoverOffset: 4,
    };

    const options = {
        plugins: {
            legend: {
                display: true,
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    };

    return <Doughnut options={options} data={userData} />;
};

export default DoughnutChart;
