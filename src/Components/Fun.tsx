import React from "react";
import moment from "moment";
import {render} from "@testing-library/react";
import Styles from '../Styles'
import { Form, Field } from "react-final-form";
import {useState} from "react";

const today = moment.utc(new Date()).format('YYYY MMMM DD (dddd)')

console.log(today)

const Fun = () => {
    return (
      <div>
        <h1 style={{flexDirection: "column", alignContent: "center", fontSize: '2rem'}}>{`${today}`}</h1>
      </div>
    )
}

export default Fun