import React from 'react'

const styles = {
    height: "100vh",
    width: "100vw",
    justifyContent: "center"
}

export default function Notfound(props) {
    
    return (
        <div className={`flexColAroundCenter`} style={styles} >
            <h1 className="mainHeading" > 404 </h1>
            <p className="paragraph" >  Oops... nothing here! </p>
        </div>
    )
}
