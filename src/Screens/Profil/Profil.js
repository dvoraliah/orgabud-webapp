import React from 'react'
import { useForm } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";

export default function Profil() {

     const form = useForm({
       initialValues: {
         email: "",
       },
     });

     const onNewPasswordClicked = () => {
        console.log("newPass")
     }

     const onDeleteAccountClicked = () => {
        let response = window.confirm("Voulez-vous vraiment supprimer votre compte ? ")
        if(response) {
            console.log("faire la suppression")
        }
     }

    return (
      <Box sx={{ maxWidth: 470 }} mx="auto">
        <form
          className="change-mail-contenair"
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <div className="profil-title-text">Modifier mon adresse email</div>
          <TextInput
            className="profil-change-mail-input"
            withAsterisk
            placeholder="Saisissez votre nouvelle adresse email"
            {...form.getInputProps("email")}
          />
          <div className="profil-warning-text">
            ATTENTION ! En pressant la touche ENTRÉE vous recevrez un email de
            réinitialisation. Vérifiez vos SPAMs
          </div>

          <div className="profil-title-text">Modifier mon mot de passe</div>
          <Button
            className="profil-button-password "
            type="button"
            onClick={onNewPasswordClicked}
          >
            Recevoir un lien de régénération du mot de passe
          </Button>
          <div className="profil-warning-text">Vérifiez vos SPAMs</div>

          <div className="profil-title-text">Supprimer mon compte</div>
          <Button
            className="profil-button-delete-account "
            type="button"
            onClick={onDeleteAccountClicked}
          >
            Supprimer et effacer toutes mes données
          </Button>
        </form>
      </Box>
    );
}
