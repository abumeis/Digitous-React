import React from 'react'
import { Link } from "react-router-dom"

 class HomePage extends React.Component {
    render() {
        return (
            <div>
                {this.props.movie.map((movie, index) => {
                    return (
                        <Link key={index}  to="/movie">
                            <img className="" alt="" src={movie.image} />
                        </Link>
                    );
                })}
            </div>
        )
    }
}
export default HomePage