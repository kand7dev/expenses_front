import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesPerCategory } from "../services/statistics";
import { useEffect, useState } from "react";

const StatisticsPage = () => {
    const dispatch = useDispatch();
    const expenseAmountPerCategory = useSelector(state => state.statisticsSlice.expenseAmountPerCategory);
    const [doughnut, setDoughnut] = useState({
        labels: [],
        data: [],
    });

    useEffect(() => {
        setDoughnut({
            labels: expenseAmountPerCategory.map(x => x.key),
            data: expenseAmountPerCategory.map(x => x.value)
        })

    }, [expenseAmountPerCategory]);

    useEffect(() => {
        getExpensesPerCategory(dispatch)
    }, []); //eslint-disable-line react-hooks/exhaustive-deps


    const data = {
        labels: doughnut.labels,
        datasets: [{
            data: doughnut.data,
            backgroundColor: [
                "#007BFF",
                "#FF0000",
                "#FFD700",
                "#28A745",
                "#FF00FF",
                "#FF9900",
                "#00FFFF",
                "#D69AE5",
                "#FF8F66",
                "#00FF00"
            ]
        }]
    };
    return <div hidden={!expenseAmountPerCategory || !expenseAmountPerCategory.length} style={{ maxWidth: "35rem", maxHeight: "35rem", margin: "auto", textAlign: "center" }} >
        <h4 style={{ marginTop: "10px", fontFamily: "Satisfy" }}>Expenses per Caregory</h4>
        <Doughnut data={data} />
    </div >
};

export default StatisticsPage;