import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, Eye, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "deivid@email.com",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  }
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" asChild className="mt-4">
          <h1> Ignite Lab</h1>
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <PasswordInput />
        <label htmlFor="remenber" className="flex items-center gap-2">
          <Checkbox id="remenber" />
          <Text size="sm" className="text-gray-200 cursor-pointer">
            Lembar de min por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          asChild
          size="sm"
          className="text-gray-400 underline hover:text-gray-100 transition-colors"
        >
          <a href="#">Esqueceu sua senha?</a>
        </Text>
        <Text
          asChild
          size="sm"
          className="text-gray-400 underline hover:text-gray-100 transition-colors"
        >
          <a href="#">Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  );
}

function PasswordInput() {
  return (
    <label htmlFor="password" className="flex flex-col gap-3">
      <Text className="font-semibold">Sua senha</Text>
      <TextInput.Root>
        <TextInput.Icon>
          <Lock />
        </TextInput.Icon>
        <TextInput.Input
          id="password"
          type="password"
          placeholder="***********"
        />
        <TextInput.Icon>
          <Eye />
        </TextInput.Icon>
      </TextInput.Root>
    </label>
  );
}
