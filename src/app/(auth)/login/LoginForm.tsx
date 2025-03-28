"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiLockLine } from "react-icons/ri";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const onSubmit = (data: LoginSchema) => console.log(data);

  return (
    <div className="flex items-center justify-center mt-40">
      <Card className="w-full max-w-sm p-6 rounded-lg shadow-md">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-default">
            <div className="flex flex-row items-center gap-3">
              <RiLockLine size={30} />
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <p className="text-neutral-500">Welcome back to LoveLetter!</p>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                defaultValue=""
                label="Email"
                variant="bordered"
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message as string}
              />
              <Input
                defaultValue=""
                label="Password"
                variant="bordered"
                type="password"
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message as string}
              />
              <Button
                fullWidth
                type="submit"
                color="default"
                isDisabled={!isValid}
              >
                Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
