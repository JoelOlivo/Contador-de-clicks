import React from "react";
import '../stylesheets/contador.css'

function ContadorClicks({click}) {

  return (
    <div className="contador">
      {click}
    </div>
  );
}

export default ContadorClicks;
