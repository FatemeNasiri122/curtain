import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setErrorMessage("");
        const { email, password } = data;
        if (email === user.email && password === user.password) {
            dispatch(login());
            nav("/shop");
        } else {
            setErrorMessage("authentication error");
        }
    }

    return (
        <div className="px-4 h-svh flex justify-center items-center">
            <div className="w-full lg:w-1/2">
                <h1 className="text-center text-2xl">login</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Input
                        id={"email"}
                        label={"email"}
                        placeholder={"Enter your email"}
                        type={"email"}
                        register={{
                            ...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })
                        }}
                        hasError={errors?.email ? true : false}
                        errorMessage={errors?.email?.message}
                    />
                    <Input
                        id={"password"}
                        label={"password"}
                        placeholder={"Enter your password"}
                        type={"password"}
                        register={{
                            ...register("password", {
                                required: "Password is required",
                            })
                        }}
                        hasError={errors?.password ? true : false}
                        errorMessage={errors?.password?.message}
                    />
                    <p className="text-error my-4">{errorMessage}</p>
                    <Button
                        varient={"primary"}
                        type={"submit"}>
                        login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login;