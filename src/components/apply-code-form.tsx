import { Input, InputError } from "@vegaprotocol/ui-toolkit";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "./buttons";

export const ApplyCodeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [params] = useSearchParams();
  useEffect(() => {
    const code = params.get("code");
    if (code) setValue("code", code);
  }, []);

  const onSubmit = (data: unknown) => console.log("APPLY CODE", data);

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-xl mb-5 text-center uppercase calt">
        Apply a referral code
      </h3>
      <p className="mb-6 text-center">Enter a referral code</p>
      <form
        className={classNames("w-full flex flex-col gap-3", {
          "animate-shake": Boolean(errors.code),
        })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex-grow">
          <span className="block text-vega-clight-100 dark:text-vega-cdark-100 mb-1 text-sm">
            Your referral code
          </span>
          <Input
            hasError={Boolean(errors.code)}
            {...register("code", {
              required: "You have to provide a code to apply it.",
            })}
          />
        </label>
        <Button className="w-full" type="submit">
          Apply
        </Button>
      </form>
      {errors.code && (
        <InputError>{errors.code.message?.toString()}</InputError>
      )}
    </div>
  );
};
