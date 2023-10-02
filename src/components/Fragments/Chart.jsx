import React from 'react';
import BarChart from '../Elements/Chart/BarChart';
import DoughnutChart from '../Elements/Chart/DoughnutChart';
import LineChart from '../Elements/Chart/LineChart';
import RadarChart from '../Elements/Chart/RadarChart';
const Chart = () => {
    return (
        <div className="px-3">
            <div className="flex items-center justify-center gap-6">
                <div className="w-[500px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        jumlah penduduk
                    </h1>
                    <LineChart />
                </div>
                <div className="w-[500px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        prasarana air bersih
                    </h1>
                    <BarChart />
                </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
                <div className="w-[322px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        jumlah penduduk tiap dusun
                    </h1>
                    <DoughnutChart />
                </div>
                <div className="w-[322px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        jumlah penduduk tiap dusun
                    </h1>
                    <RadarChart />
                </div>
                <div className="w-[322px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        jumlah KK tiap dusun
                    </h1>
                    <DoughnutChart />
                </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
                <div className="w-[345px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        jumlah prasarana umum
                    </h1>
                    <DoughnutChart />
                </div>
                <div className="w-[650px] bg-white p-6 rounded-lg">
                    <h1 className="text-sm text-[#44556C] font-medium font-rubik capitalize mb-5">
                        jumlah penduduk tiap dusun
                    </h1>
                    <BarChart.DoubleBarChart />
                </div>
            </div>
        </div>
    );
};

export default Chart;
