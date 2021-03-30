import React from "react";
import {Link} from 'react-router-dom';
import { StyledHome } from '../StyledComponents/StyledHome'

export default function Home (props) {
    return (
        <div className='home-wrapper'>
            <StyledHome>
                <div>
                    <h1>Never forget to water your plants again!</h1>
                    <Link to='/plants'>
                        <button>Pick a Plant</button>
                    </Link>
                    <footer>&#169; ttwebft32</footer>
                </div>
            </StyledHome>
        </div>
    )
}