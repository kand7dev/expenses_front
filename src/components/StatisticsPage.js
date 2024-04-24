import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesPerCategory } from "../services/statistics";
import { useEffect, useState } from "react";
import {
        Chart as ChartJS,
        ArcElement,
        Tooltip,
        Legend
        } 
        from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsPage = () => {
    const dispatch = useDispatch();
    const expensesAmountPerCategory = useSelector(state =>
        state.statisticsSlice.expensesAmountPerCategory);
    const [doughnut, setDoughnut] = useState({
        labels: [],
        data: [],
    });
const options = {
}

    useEffect(() => {
        setDoughnut({
            labels: expensesAmountPerCategory.map(x => x.Key),
            data: expensesAmountPerCategory.map(x => x.Value),
        })
    }, [expensesAmountPerCategory]);

    useEffect(() => {
        getExpensesPerCategory(dispatch);
    },);

    const data = {
        labels: doughnut.labels,
        datasets: [{
            data: doughnut.data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF5733',
                '#33FF57',
                '#5733FF',
                '#FF3357',
                '#33FF57',
                '#57FF33',
                '#3357FF',
            ]
        }]
    }

    return (
        <div
            style={{ maxWidth: '35rem', maxHeight: '35rem', margin: 'auto', textAlign: 'center'}}>
            <h4 style={{marginTop: '10px'}}>Expenses per Category</h4>
            <Doughnut
                data={data}
                options={options}
            ></Doughnut >
        </div>);
};

export default StatisticsPage;