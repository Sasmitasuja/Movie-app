// import React from "react";

// class Navbar extends React.Component {
//     render() {
//         return (
//             <>
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="/" >Prime video</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a className="nav-link active" aria-current="page" href="/">Home</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/">About</a>
//                                 </li>
//                             </ul>
//                             <form className="d-flex" role="search">
//                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                 <button className="btn btn-outline-success" type="submit">Search</button>
//                                 <img src="https://th.bing.com/th/id/R.7fe97f6511b1eb7c1ad4e2f7fa9e5143?rik=zfaUupWi3OA5iw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f4Tb%2fprM%2f4TbprM67c.png&ehk=pqIY6chnBPc1FK48dQh0iLDkrhGlz2wXz8dk%2fdPqr7Y%3d&risl=&pid=ImgRaw&r=0"  alt="
//                                 cart" className="cart"/>
//                                 <span>5</span>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>


//             </>
//         )
//     }
// }
// export default Navbar;

import React from "react";
import styled from "styled-components";

class Navbar extends React.Component {
    render() {

        return (
            <Nav>
                
                <Title>Movie App</Title>
                <div>

                    <img style={{height:48, marginRight:20}}src="https://cdn-icons-png.flaticon.com/512/5825/5825075.png" alt="Cart-icon" />
                    <span>{this.props.cardcount}</span>
                </div>
                
            </Nav>




        )
    }
}


const Nav = styled.div`
            background: linear-gradient( 50deg, #251bb1, #bc16dd );
            height:70px;
            display: flex;
            justify-content:space-between;
            align-item:center;
            position:relative;
            &:hover{background: linear-gradient( 50deg, #bc16dd, #251bb1 )}
            `

const Title= styled.div`
           font-size:30px;
           color:rgb(251, 203, 73);
           font-weight:600;
           font-family:Montserrat,sans-serif;
           text-transform:uppercase;
           margin-left:20px;
           margin-top: 10px;
           &:hover{color:white};

           `
            
export default Navbar;

