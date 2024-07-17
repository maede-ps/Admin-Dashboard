import { ChartConfiguration, registerables } from 'chart.js';
import { darkOptions } from "@/components/DataChart/Themes";
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { months } from '@/helper/Util';

const DataChat = (props: ChartConfiguration) => {
    const {data,options} =props;
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
if(chartRef.current){
    const chart=new Chart(chartRef.current,{
        ...props,
        options:{
            ...options,
            ...darkOptions,
        },
    })

    return () =>{
        chart.destroy();
    }

}
    },[data]);

  return <canvas ref={chartRef}/>;
}

Chart.register(...registerables)

export default DataChat