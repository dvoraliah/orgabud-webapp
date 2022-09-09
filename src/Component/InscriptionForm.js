import React from 'react'
import { TextInput, Checkbox, Button, Group, Box, Text } from "@mantine/core";
import { useForm } from "@mantine/form";

import { OrgabudREGISTER } from "../Services/OrgabudAPI";
import { useNavigate } from "react-router-dom";

export default function InscriptionForm() {

    let navigate = useNavigate();
    
    const onPressSubmit = () => {
        if(OrgabudREGISTER(form.values.pseudo, form.values.email, form.values.password, form.values.password_confirmation))
        {
            let path = "/";
            navigate(path);
        }
    }
    console.log(sessionStorage.getItem("token"))
    const form = useForm({
    initialValues: {
      pseudo: "test",
      email: "test@test.fr",
      password: "aaa",
      password_confirmation: "aaa",
      termsOfService: true,
    },

    validate: {
      pseudo: (value) =>
        value.length < 2
          ? "Veuillez saisir un pseudo de plus de 2 caractères"
          : null,
      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : "L'adresse mail doit être au format votre@mail.fr",
      password: (value) =>
        value.length < 2
          ? "Le mot de passe doit contenir au moins 2 caractères"
          : null,
      // password: (value) =>
      //   /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      //     value
      //   )
      //     ? null
      //     : "Doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (!@#$%^&*)",
      password_confirmation: (value, values) =>
        value !== values.password ? "Les mots de passes sont différents" : null,
      termsOfService: (value) =>
        value === true
          ? null
          : alert("Veuillez accepter les conditions d'utilisation"),
    },
  });

  return (
    <>
      <div className="body">
        <Text className="sign-up-form-text">Inscription</Text>
        <span className="spacer-inscription"> </span>
        <div className="sign-up-form-contenair">
          <Box
            className="inscription-contenair"
            sx={{ maxWidth: 600 }}
            mx="auto"
          >
            <form
              onSubmit={form.onSubmit(
                onPressSubmit /* (values) => console.log(values) */
              )}
            >
              <p id={"error_api_email"}className="error_api_text hidden">Cet email est déjà enregistré</p>
              <TextInput
                className="inscription-input"
                withAsterisk
                label="Pseudo"
                placeholder="Choisissez un pseudo"
                {...form.getInputProps("pseudo")}
              />

              <TextInput
                className="inscription-input"
                withAsterisk
                label="Email"
                placeholder="Saisissez votre adresse email"
                {...form.getInputProps("email")}
              />
              <TextInput
                className="inscription-input"
                withAsterisk
                label="Mot de passe"
                placeholder="Saisissez votre mot de passe"
                {...form.getInputProps("password")}
              />
              <TextInput
                className="inscription-input"
                withAsterisk
                label="Confirmation du mot de passe"
                placeholder="Saisissez à nouveau votre mot de passe"
                {...form.getInputProps("password_confirmation")}
              />

              <Checkbox
                mt="md"
                label="J'accepte les conditions d'utilisation Orgabud"
                {...form.getInputProps("termsOfService", {
                  type: "checkbox",
                })}
              />

              <Group position="right" mt="md">
                <Button
                  className="button-inscription plain-button-no-hover"
                  type="submit"
                >
                  S'enregistrer
                </Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
}
