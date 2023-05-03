import React from "react";

export default function Alert(props) {
  const motabhai = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height:'65px'}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{motabhai(props.alert.type)}</strong> : {props.alert.msz}
        </div>
      )
    }

    </div>
)
}