"use client";

import { RegisterSchema, registerSchema } from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardBody, Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { RiLockLine } from "react-icons/ri";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center mt-40">
      <Card className="w-full max-w-sm p-6 rounded-lg shadow-md">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-default">
            <div className="flex flex-row items-center gap-3">
              <RiLockLine size={30} />
              <h1 className="text-3xl font-semibold">Sign Up</h1>
            </div>
            <p className="text-neutral-500">Welcome to NextMatch</p>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                defaultValue=""
                label="Name"
                variant="bordered"
                {...register("name")}
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
              />
              <Input
                defaultValue=""
                label="Email"
                variant="bordered"
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
              <Input
                defaultValue=""
                label="Password"
                variant="bordered"
                type="password"
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
              />
              <Button
                isLoading={isSubmitting}
                isDisabled={!isValid}
                fullWidth
                color="default"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
