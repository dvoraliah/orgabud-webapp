// import React from 'react'
import axios from "axios";


export const baseURL = "http://orgabud.ranaweera.fr/api/";
export function OrgabudLOGIN(email, password) {
    axios
      .post(baseURL + "login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      });
}

export async function OrgabudREGISTER(pseudo, email, password, password_confirmation) {
    
    //let navigate = useNavigate();

    await axios.post(baseURL+"register", {
        name: pseudo,
        email: email,
        password: password,
        password_confirmation: password_confirmation
    }).catch((e)=> {
        console.log(e.response.data["message"])
        let errordiv = document.getElementById("error_api_email");
        if (e.response.data["message"] === "The email has already been taken.")
          errordiv.classList.remove("hidden");
        else{
            errordiv.innerHTML = e.response.data["message"];
        }
    })
    .then((response) => {
        console.log(response.data.token);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("pseudo", response.data.name)
        return true;
    })
}
