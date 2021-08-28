import {Link} from 'react-router-dom'

const Confirmation = ({order, error}) => {
    console.log(order)
    console.log(error)
    return(
        <div>
            {error? <h1>{error}</h1>: <h1>Loading</h1>}
        </div>
    )
}

export default Confirmation
