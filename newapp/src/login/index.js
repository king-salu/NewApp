import React, {useState, useEffect} from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/BlackSans/blacksansregularwebfontd6761cbf250866e8870d97f03fa629a8.woff'
import style from "./mystyle.module.css";
import classNames from 'classnames';

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //css
    const formcontrol = classNames('form-control', style.myformcontrol)
    const loginbutton = classNames(style.loginbtn, 'btn', 'btn-primary')

    return(
        <div className={style.component}>
            <div className={style.row}>
                <h1 className={style.logotext}>Soft Music</h1>
            </div>

            <div className={style.row2}>
                <div className={style.login}>
                    <h1 className={style.header}>Sign In</h1>
                    <h1 className={style.subheader}>Welcome back, its nice to have you again</h1>

                    <div className={style.formdiv} style={{marginBottom: "18px"}}>
                        <label htmlFor="InputEmail" className={style.formlabel}>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} 
                                className={formcontrol}/><br/>
                    </div>

                    <div className={style.formdiv} style={{marginBottom: "34px"}}>
                        <label htmlFor="InputPassword" className={style.formlabel}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={formcontrol}/><br/>
                    </div>

                    <button className={style.loginbtn}>Sign In</button>
                </div>
            </div>

        </div>
    );
}