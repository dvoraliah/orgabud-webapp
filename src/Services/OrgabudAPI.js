// import React from 'react'
import axios from "axios";


export const baseURL = "http://orgabud.ranaweera.fr/api/";

export function OrgabudLOGIN(email, password, whenLogged) {
  
  
    axios
      .post(baseURL + "login", {
        // email: email,
        // password: password,
        email: "dvoraliah@test.fr",
        password: "anya",
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("pseudo", response.data.user.name);
        // console.log(response.data.user.name);
        whenLogged();
      });
}

export async function OrgabudREGISTER(pseudo, email, password, password_confirmation) {

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

export async function OrgabudGetCategories(){
  let tokenData = {
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }
  }
  return await axios.get(
    baseURL + "categories", tokenData
    )

}
