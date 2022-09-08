import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";

export default function ConnexionForm() {

      const onClickedConnect = (props) => {
        console.log(props);
      };

      const onSignUpClicked = () => {
          console.log('sign up')
      }
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
        onSubmit={form.onSubmit((values) => onClickedConnect(values))}
      >
        <TextInput
          className="connexion-input"
          withAsterisk
          placeholder="votre@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          className="connexion-input"
          withAsterisk
          placeholder="Mot de Passe"
          {...form.getInputProps("password")}
        />
        <Group position="right" mt="md">
          <Button className="connexion" type="submit">
            Connexion
          </Button>
          <Button className="sign-up sign-up-text" type="button" onClick={onSignUpClicked}>
            S'incrire
          </Button>
        </Group>
      </form>
    </Box>
  );
} 