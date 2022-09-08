import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";

export default function ConnexionForm() {

      const onClickedConnect = (props) => {
        console.log(props.values);
      };
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
        placeholder="your@email.com"
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
        </Group>
    </form>
    </Box>
  );
} 