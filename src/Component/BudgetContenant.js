import React, { useState, useEffect } from 'react'
import { baseURL } from "../Services/OrgabudAPI";
import axios from "axios";
import { Table, Input, Button } from '@mantine/core';
import { FaRegTrashAlt } from "react-icons/fa"
import { useForm } from "@mantine/form";
import { FaCaretDown } from "react-icons/fa";
// import { TextInput} from "@mantine/core";


export default function BudgetContenant(props) {

    const tokenData = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
    };
    
    const categories = props.categories

    const [fields, setFields] = useState([])

    const getFields = async() => {
        await axios.get(baseURL + "fields", tokenData).then(
            (response) => {
                console.log(response.data)
                // setFields(response.data)
            }
        )
    }

    const categoryId = props.categoryId
    const [budgets, setBudgets] = useState([])
    const onEnterPress = (values) => {
        for (const key in values) {

            // console.log(key)
            if (values.hasOwnProperty(key)) {
                const element = values[key];
                console.log(key, element)
                    if(element.length !== 0 && key !== "new"){
                    axios({
                        method: 'put',
                        url:baseURL+'budgets/'+key,
                        headers: {
                            Authorization: "Bearer " + sessionStorage.getItem("token"),
                        },
                        data: {
                            value: element,
                        }
                    }
                    ).then((response) => {
                        console.log(response.data)
                    }).catch((err) => {console.log(err)})
                }
            }
        }
    }
    
    const dynamicInitValues = () => {
        let iv = {};
        budgets.forEach(element => {
            var name = "" + element.id
            iv[name] = ""
        })
        return iv;
    }
    const form = useForm({
        new: "",
        initialValues: dynamicInitValues()
    });


    
    // console.log(form.values)

    const rows = budgets.map((element) => {    
        if(element.field.field_category_id === categoryId){            
            return(
            <tr key={element.id}>
                     <td>{element.field.name}</td>
                    <td>{<Input
                        className="input-budgets-value"
                        variant="unstyled"
                        placeholder={element.value}
                        {...form.getInputProps("" + element.id)}
                    />}</td>
                <td>{element.is_debited}</td>
                <td><FaRegTrashAlt /></td>
            </tr>
            )
        } 
        return null        
    });

    const getBudgets = async() => {
        
        await axios.get(baseURL + "budgets", tokenData).then(
            (response) => {
                setBudgets(response.data)
            }
        )
    }

    useEffect(() => {
        
        getBudgets()
        getFields()
// eslint-disable-next-line 
    }, [])
    
    if(props.categoryId === 6){
        return (
            <div className="contenant-budgets-box">
                <div className="contenant-budgets-title">
                    {props.categorySlug === "resume" ? "VOTRE RÉSUMÉ DU MOIS" : ""}
                </div>
                <div className="contenair-budgets-resume">
                    {categories.map((e) => {
                        if(e.slug !== "resume"){
                        return( <div className="budgets-resume-text" key={e.slug}>{e.name}</div> )
                    } return null
                    })}
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="contenant-budgets-box">
                <div className="contenant-budgets-fields">
                    <form
                        className="connexion-contenair"
                        onSubmit={form.onSubmit((values) =>onEnterPress(values))}
                    >
                        <Table highlightOnHover>
                            <thead>
                                <tr>
                                    <th>Intitulé Achat</th>
                                    <th>Montant</th>
                                    <th>Débité</th>
                                    <th>Supprimer</th>

                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                                <tr>
                                    <td><Input component="select" rightSection={<FaCaretDown />}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </Input></td>
                                    <td><Input
                                        className="input-budgets-value"
                                        variant="unstyled"
                                        placeholder="0"
                                        {...form.getInputProps("new")}
                                    /></td>
                                    <td> 0 </td>
                                    <td><FaRegTrashAlt hidden/></td>
                                </tr>
                                <Button
                                    className="hidden-button"
                                    type="submit"
                                    // onClick={onNewPasswordClicked}
                                >
                                    hidden-button
          </Button>
                                </tbody>
                        </Table>
                    </form>    
                    
                </div>
            </div>
        )
    }
}
