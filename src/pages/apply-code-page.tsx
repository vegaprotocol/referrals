import { Input, InputError, TradingButton } from "@vegaprotocol/ui-toolkit";
import { Layout } from "../components/layout";
import { Tile } from "../components/tile";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export const ApplyCodePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => console.log("APPLY CODE", data);

  return (
    <Layout className="pt-32 w-2/3 md:w-1/2">
      <Tile variant="rainbow">
        <h3 className="text-xl mb-3">Apply referral code</h3>
        <p className="text-vega-clight-100 dark:text-vega-cdark-100 mb-3">
          Type the code below and hit the button to apply the code to your
          wallet.
        </p>
        <form
          className={classNames("flex flex-row gap-2 w-full", {
            "animate-shake": Boolean(errors.code),
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex-grow">
            <span className="sr-only">Code:</span>

            <Input
              hasError={Boolean(errors.code)}
              {...register("code", {
                required: "You have to provide a code to apply it.",
              })}
            />
          </label>
          <TradingButton type="submit">Apply</TradingButton>
        </form>
        {errors.code && (
          <InputError>{errors.code.message?.toString()}</InputError>
        )}
      </Tile>
    </Layout>
  );
};
