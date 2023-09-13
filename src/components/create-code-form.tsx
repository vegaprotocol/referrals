import { RainbowButton } from "./buttons";

export const CreateCodeForm = () => {
  const onSubmit = (data: unknown) => console.log("CREATE CODE", data);

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-xl mb-5 text-center uppercase calt">
        Create a referral code
      </h3>
      <p className="mb-6 text-center">
        Generate a referral code to share with your friends and start earning
        commission.
      </p>

      <div className="text-center">
        <RainbowButton variant="border" onClick={() => onSubmit(Math.random())}>
          Create a referral code
        </RainbowButton>
      </div>
    </div>
  );
};
