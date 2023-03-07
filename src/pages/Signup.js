import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(name, email, password);
    };
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Registrarse</h3>
            <FormControl isRequired>
                <FormLabel>Nombre:</FormLabel>
                <Input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email:</FormLabel>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Contraseña:</FormLabel>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <Button type="submit" disabled={isLoading}>
                Registrarse
            </Button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};
export default Signup;
