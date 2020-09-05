import React from "react"

import { Grid } from "../../components"

function Cart({ leftCol, rightCol }) {
    return <div style={{ height: "auto" }} >
        <Grid leftCol={leftCol} rightCol={rightCol}
        leftSpan={14} rightSpan={10} />
    </div>
}

export default Cart