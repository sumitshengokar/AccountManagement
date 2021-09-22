//bank Manager Landing Page
import React from 'react'
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

const heading = {
    textAlign: "center"
}

const s = {
    width: 1100,
    paddingLeft: 300
}

const bg = {
    backgroundImage: "url(/imgq.png)",

    /* Full height */
    height: 700,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}


const accounts = ["acc1", "acc2", "acc3", "acc4"];
const t = accounts.length;
const customerName = "Shreyas";


export default function Manager() {

    const history = useHistory();
    const listItems = accounts.map((accounts) =>
        <li className="list-group-item">{accounts}</li>
    );

    const handleClick=()=>{
        history.push('/new-customer');

    }
    return (
        <>
            <div style={bg}>
                <h1 style={{ textAlign: 'center', color: "white" }}>Branch Manager Dashboard</h1>
                <br /><br />
                <h2 style={{ textAlign: "center", color: "white" }}>Accounts Linked with PAN</h2><br />

                <div style={s}>
                    <form className="d-sm-flex">
                        <input className="form-control me-2" type="search" placeholder="Enter PAN card number" aria-label="Search" />
                        &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <button className="btn btn-outline-success" style={{ backgroundColor: "#ADD8E6", color: "black" }} type="submit">Search Accounts</button>
                    </form>
                </div>

                {t == 0 ? <div style={{ width: 1100, justifyContent: 'center', paddingLeft: 300, paddingTop: 50 }}>
                    <div class="card border-0" >
                        <br /><br />
                        <div class="card-body">
                            <h5 class="card-title">No Accounts Found !!</h5>
                        </div>
                        <ul>{listItems}</ul>
                        <div class="card-body">
                            <button className="btn btn-outline-success" style={{ backgroundColor: "#ADD8E6", color: "black" }} type="submit" onClick="check">Create New Account</button>
                        </div>
                    </div>
                </div> : <div style={{ width: 1100, justifyContent: 'center', paddingLeft: 300, paddingTop: 50 }}>
                    <div class="card border-0" >
                        <br /><br />
                        <div class="card-body">
                            <h5 class="card-title">Accounts found:</h5>
                            <p class="card-text">We found below accounts linked with {customerName}'s PAN card number.</p>
                        </div>
                        <ul>{listItems}</ul>
                        <div class="card-body">
                            <button className="btn btn-outline-success" style={{ backgroundColor: "#ADD8E6", color: "black" }} type="submit" onClick={handleClick}>Create New Account</button>
                        </div>
                    </div>
                </div>}

            </div>
        </>
    )


}
