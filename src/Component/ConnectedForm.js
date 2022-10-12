import React from 'react'
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import ProfilPicture from "../asset/images/profil_pictures/profil_default.png";

export default function ConnectedForm(props) {

    const form = useForm({
      initialValues: {
        email: "",
        password: "",
      },
    });

    console.log(sessionStorage.pseudo)
    return (
      <div>
        <Box sx={{ maxWidth: 600 }} mx="auto">
          <form
            className="connexion-contenair"
            onSubmit={form.onSubmit((values) => props.onClickedConnect(values))}
          >
            <div className="welcome-header-box">
              <div className="welcome-header-text">
                Bienvenue {props.pseudo ? props.pseudo : "invité"}
              </div>
              <div className="welcome-picture-box">
                <img
                  src={ProfilPicture}
                  className="header-profil-picture"
                  alt="profil picture"
                  // onClick={returnToHome}
                />
              </div>
            </div>

            <div className="form-connexion-contenair"></div>
            <Group position="right" mt="md">
              {/* <Link to="/register"> */}
              <Button
                className="sign-up sign-up-text"
                type="button"
                onClick={props.onDisconnectClicked}
              >
                Se Déconnecter
              </Button>
              {/* </Link> */}
            </Group>
          </form>
        </Box>
      </div>
    );
}
