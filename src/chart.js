import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';


const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {

    const options = {
        animationEnabled: true,
        maintainAspectRatio: false,
        aspectRadio: 3,
        height:560,
        width:300,

        data: [{
            type: "doughnut",

            indexLabel: "{name}: {y}",
            yValueFormatString: "#,'('###')'",

            dataPoints: [
                { name: "Cluster1", y: Math.floor(Math.random() * 100) },
                { name: "Cluster2", y: Math.floor(Math.random() * 100) },
                { name: "Cluster3", y: Math.floor(Math.random() * 100) },
                { name: "Cluster4", y: Math.floor(Math.random() * 100) },
                { name: "Cluster5", y: Math.floor(Math.random() * 100) },
             
               
            ]
        }]
    };


    return (
        <div className="App" style={{ height: "100vh", width: "100vw", background: "pink" }}>

            <CanvasJSChart options={options} />


        </div>
    );
}

export default App;
