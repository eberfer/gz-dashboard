import React from "react";

function DataBoxes(props){

  let box = {
    leftColor: `card background border-left-${props.color} shadow h-100 py-2`,
    icon: `fas ${props.icon} fa-2x text-gray-300`,
    title: `text-xs font-weight-bold text-${props.color} text-uppercase mb-1`
  }

  // Declaramos como PROPS a todos los valores del BOX que vayan a variar sus datos y caracteristicas

    return (
        <div className="col-md-4 mb-4">                    
                  <div className={box.leftColor}>
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className={box.title} >{props.boxName}</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{props.boxData}</div>
                        </div>
                        <div className="col-auto">
                          <i className={box.icon}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}
export default DataBoxes;