import { Link } from "react-router-dom";

function homesection()
{
    return(
    <>
     <div className='container-fluid'>
        <p>
          <span className='h'><b>Hii</b></span>, Dependra Singh
        </p>

        <Link to="/login">Go to Login</Link>
        </div>
    </>
    )
}

export default homesection;