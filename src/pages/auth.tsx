import AuthLayout from "@/layouts/auth-layout"
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Form } from '@heroui/form'
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React from "react";

let tabs = [
    {
        id: "sign-in",
        label: "SignIn",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: "sign-up",
        label: "SignUp",
        content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    }
];
const Auth = () => {
    const [submitted, setSubmitted] = React.useState(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent default browser page refresh.
        e.preventDefault();

        // Get form data as an object.
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Submit data to your backend API.

        console.log('submitted data', data)

        setSubmitted(data);
    };

    return (
        <AuthLayout>
            <div className="flex w-full flex-col">
                <h1 className="font-bold text-2xl mb-3 px-2">Chitty Chat</h1>
                <Tabs aria-label="Dynamic tabs" items={tabs}>
                    {(item) => {
                        console.log('item', item)
                        return (
                        <Tab key={item.id} title={item.label}>
                            <Card className="max-w-96">
                                <CardBody>
                                    <Form onSubmit={onSubmit} className="flex flex-col gap-y-5 py-5">
                                        {
                                            item.id == 'sign-up' && <Input
                                            isRequired
                                            errorMessage="Please enter a valid username"
                                            label="Username"
                                            labelPlacement="outside"
                                            name="username"
                                            placeholder="Enter your username"
                                            type="username"
                                        />
                                        }
                                        <Input
                                            isRequired
                                            errorMessage="Please enter a valid email"
                                            label="Email"
                                            labelPlacement="outside"
                                            name="email"
                                            placeholder="Enter your email"
                                            type="email"
                                        />
                                        <Input
                                            isRequired
                                            errorMessage="Please enter a valid password"
                                            label="Password"
                                            labelPlacement="outside"
                                            name="password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                        <Button className="bg-black text-white" type="submit">Submit</Button>
                                        {submitted && (
                                            <div className="text-small text-default-500">
                                                You submitted: <code>{JSON.stringify(submitted)}</code>
                                            </div>
                                        )}
                                    </Form>
                                </CardBody>
                            </Card>
                        </Tab>
                    )}}
                </Tabs>
            </div>
        </AuthLayout>
    )
}

export default Auth