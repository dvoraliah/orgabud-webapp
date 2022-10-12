import React from 'react'
import { useForm } from "@mantine/form";
import { Button, Group, Box } from "@mantine/core";
import ProfilPicture from "../asset/images/profil_pictures/profil_default.png";

export default function ConnectedForm(props) {

    const form = useForm({
        initialValues: {
        email: "",
        password: "",
        },
    });

    const onModifyProfilClicked = () => {
        console.log("modif")
    }

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
                  alt="Profil"
                  className="header-profil-picture"
                  title="Modifier le profil"
                  onClick={onModifyProfilClicked}
                />
              </div>
            </div>

            <div className="form-connexion-contenair"></div>
            <Group position="right" mt="md">
              {/* <Link to="/register"> */}
              <div className="connected-header-buttons-box">
                <Button
                  className="my-dashboard-button sign-up-text"
                  type="button"
                  onClick={props.onMyDashboardClicked}
                >
                  Mon Dashboard
                </Button>
                <Button
                  className="disconnect-button sign-up-text"
                  type="button"
                  onClick={props.onDisconnectClicked}
                >
                  Se Déconnecter
                </Button>
              </div>
              {/* </Link> */}
            </Group>
          </form>
        </Box>
      </div>
    );
}
