import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"


export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title"> Boilerplate </h1>
            <p> Boilerplate app. </p>
            <button class="button" onClick={startLogin}> Login  </button>
        </div>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)