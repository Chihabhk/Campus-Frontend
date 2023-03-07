import { Button, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
    };
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>

            <FormLabel>Email:</FormLabel>
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel>Password:</FormLabel>
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" onClick={handleSubmit}>
                Iniciar sesión
            </Button>
        </form>
    );
};
export default Login;
