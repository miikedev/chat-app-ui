"use client";

import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React from "react";

import AuthLayout from "@/layouts/auth-layout";
import {
  sanitizeEmail,
  sanitizeUsername,
  sanitizePassword,
  validateEmail,
  validateUsername,
  validatePassword,
} from "@/utils/sanitization";
import { useAuthStore } from "@/stores/auth-store";

const tabs = [
  { id: "sign-in", label: "Sign In" },
  { id: "sign-up", label: "Sign Up" },
];

const Auth = () => {
  const {
    selectedTab,
    setTab,
    formData,
    updateField,
    validationErrors,
    setValidationErrors,
    setSubmitted,
  } = useAuthStore();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedData = {
      email: sanitizeEmail(formData.email),
      password: sanitizePassword(formData.password),
      ...(selectedTab === "sign-up" && formData.username
        ? { username: sanitizeUsername(formData.username) }
        : {}),
    };

    const errors: Record<string, string> = {};

    if (!validateEmail(sanitizedData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validatePassword(sanitizedData.password)) {
      errors.password =
        "Password must be at least 8 characters with letters and numbers";
    }

    if (selectedTab === "sign-up" && sanitizedData.username) {
      if (!validateUsername(sanitizedData.username)) {
        errors.username =
          "Username must be 3–30 characters, letters/numbers only";
      }
    }

    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitted(sanitizedData);
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="font-bold text-2xl mb-6 text-center">Chitty Chat 💬</h1>

        <Tabs
          aria-label="Authentication Tabs"
          className="w-full max-w-md"
          items={tabs}
          selectedKey={selectedTab}
          onSelectionChange={(key: string | number): void =>
            setTab(key as "sign-in" | "sign-up")
          }
        >
          {(item: { id: string; label: string }) => (
            <Tab key={item.id} title={item.label}>
              <Card className="w-full">
                <CardBody>
                  <Form
                    className="flex flex-col gap-y-5 py-5"
                    onSubmit={onSubmit}
                  >
                    {item.id === "sign-up" && (
                      <Input
                        isRequired
                        errorMessage={validationErrors.username}
                        isInvalid={!!validationErrors.username}
                        label="Username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={(e) =>
                          updateField("username", e.target.value)
                        }
                      />
                    )}

                    <Input
                      isRequired
                      errorMessage={validationErrors.email}
                      isInvalid={!!validationErrors.email}
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />

                    <Input
                      isRequired
                      errorMessage={validationErrors.password}
                      isInvalid={!!validationErrors.password}
                      label="Password"
                      name="password"
                      placeholder="Enter your password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateField("password", e.target.value)}
                    />

                    <Button
                      fullWidth
                      className="bg-black text-white"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default Auth;
