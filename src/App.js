import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';
import "./App.css";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {

  const options = {
    animationEnabled: true,
    // backgroundColor:"transparent",
  //  colorSet: "white",
    height:560,
    width:900,
    // title: {
    //   text: "Cluster Wise Attandance"
    // },
    // subtitles: [{
    //   text: "71% Positive",
    //   verticalAlign: "center",
    //   fontSize: 24,
    //   dockInsidePlotArea: true
    // }],
    data: [{
      type: "doughnut",
      // showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,'('###')'",
      // indexLabelFontColor: "white",
      // innerRadius: "60%",
      dataPoints: [
        { name: "Cluster1", y: Math.floor(Math.random() * 100) },
        { name: "Cluster2", y: Math.floor(Math.random() * 100) },
        { name: "Cluster3", y: Math.floor(Math.random() * 100) },
        { name: "Cluster4", y: Math.floor(Math.random() * 100) },
        { name: "Cluster5", y: Math.floor(Math.random() * 100) },
        { name: "Cluster6", y: Math.floor(Math.random() * 100) },
        { name: "Cluster7", y: Math.floor(Math.random() * 100) },
        { name: "Cluster8", y: Math.floor(Math.random() * 100) },
        { name: "Cluster9", y: Math.floor(Math.random() * 100) },
        { name: "Cluster10", y: Math.floor(Math.random() * 100) },
        { name: "Cluster11", y: Math.floor(Math.random() * 100) },
        { name: "Cluster12", y: Math.floor(Math.random() * 100) },
        { name: "Cluster13", y: Math.floor(Math.random() * 100) },
        { name: "Cluster14", y: Math.floor(Math.random() * 100) },
        { name: "Cluster15", y: Math.floor(Math.random() * 100) },
        { name: "Cluster16", y: Math.floor(Math.random() * 100) },
        { name: "Cluster17", y: Math.floor(Math.random() * 100) },
        { name: "Cluster18", y: Math.floor(Math.random() * 100) },
        { name: "Cluster19", y: Math.floor(Math.random() * 100) },
        { name: "Cluster20", y: Math.floor(Math.random() * 100) },
        { name: "Cluster21", y: Math.floor(Math.random() * 100) },
        { name: "Cluster22", y: Math.floor(Math.random() * 100) },
        { name: "Cluster23", y: Math.floor(Math.random() * 100) },
        { name: "Cluster24", y: Math.floor(Math.random() * 100) }
      ]
    }]
  };
  const options_total = {
    animationEnabled: true,
    maintainAspectRatio: false,
    responsive: false,
    backgroundColor:"transparent",
    height:300,
    // title: {
    //   text: "All Cluster Attandance"
    // },
    // subtitles: [{
    //   text: "71% Positive",
    //   verticalAlign: "center",
    //   fontSize: 24,
    //   dockInsidePlotArea: true
    // }],
    legend: {
      // horizontalAlign: "left", // "center" , "right"
      // verticalAlign: "center",  // "top" , "bottom"
      fontSize:20
    },
    indexLabel:{
      fontSize:50
    },
    data: [{
      type: "pie",
      indexLabel: "{y}",
      indexLabelPlacement: "inside",
       indexLabelFontColor: "white",
       indexLabelFontSize: "20",
      yValueFormatString: "#,###'%'",
      showInLegend: true, 
				legendText: "{name}",
    
				// toolTipContent: "{label}: <strong>{y}%</strong>",
				// indexLabel: "{y}%",
      dataPoints: [
        { name: "Present", y: Math.floor(Math.random() * 100) },
        { name: "Absent", y: Math.floor(Math.random() * 100) },

      ]
    }]
  };
  return (
    <div className="App">
      <header className="App-header">
        <button>back</button>
        <h2>Eacs Attendance Dashboard</h2>
        <button>Logout</button>
      </header>
      <section id="welcome-section">
        <h2>Welcome Admin</h2>

        <input type="date" />

      </section>
      <main>
        <section id="left-section">
          <ul>
            <li style={{background:"white"}}>
              <p>
                Total Employee
              </p>
              <b>
                3600
              </b>
            </li>
            <li style={{background:"white"}}>
              <p>
                Total Card Issued
              </p>
              <b>
                4100
              </b>
            </li>
            <li style={{background:"#bb63cf",color:"white"}}>
              <p>
                Present Employeee
              </p>
              <b>
                2800
              </b>
            </li>
            <li style={{background:"red" ,color:"white"}}>
              <p>
                Absent Employee
              </p>
              <b>
                800
              </b>
            </li>

          </ul>
          <div id="present_absent">
           <h2>All Cluster Attandance</h2>
              <CanvasJSChart options={options_total} />
            

          </div>
        </section>
        <section id="right-section">
          <h2>Cluster Wise Attadance</h2>
          <div id="all-cluster">
            <CanvasJSChart options={options} />
          </div>

        </section>
      </main>


    </div>
  );
}

export default App;
