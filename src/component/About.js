import React  from 'react'

export default function About(props) {
    
    // const [myStyle,setMyStyle] =useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'1px solid black'
    // });
    let myStyle = {
      color:props.mode==='dark'?'White':'#042743',
      backgroundColor:props.mode==='dark'?'#042743':'white',
      
    }
   
      return (
      <div className='container' style={myStyle} >
        <h2>About</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <p>Hello, Analyze your Text Here</p>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Easy to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Hello, here.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compartable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Hello, Here.</p>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}
