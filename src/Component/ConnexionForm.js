import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";

export default function ConnexionForm(props) {

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <form
        className="connexion-contenair"
        onSubmit={form.onSubmit((values) => props.onClickedConnect(values))}
      >
        <div className='password-forgot-container'>
          <span className="password-forgot-span"></span>
        <Button className="password-forgot">
          Mot de passe oublié ?<span className="text-transparent">.</span>
        </Button>
        </div>
        <div className="form-connexion-contenair">
        <TextInput
          className="connexion-input email-connexion-input"
          withAsterisk
          placeholder="votre@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          className="connexion-input password-connexion-input"
          withAsterisk
          placeholder="Mot de Passe"
          {...form.getInputProps("password")}
        />
        <Button className="connexion" type="submit">
          Connexion
          </Button>
        </div>
        <Group position="right" mt="md">
            <Button
              className="sign-up sign-up-text"
              type="button"
              onClick={props.onSignUpClicked}
            >
              S'incrire
            </Button>
        </Group>
      </form>
    </Box>
  );
} 