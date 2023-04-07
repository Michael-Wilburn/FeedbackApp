import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

export default function AboutPage(){
    return(
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback fir a product or a service.</p>
                <p>Version: 1.0.0</p>
                <Link to='/'>
                Back to Home
                </Link>
            </div>
        </Card>
    )
}