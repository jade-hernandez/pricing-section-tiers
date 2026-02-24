import type { IPriceCardProps } from "./PriceCardExample";
import { cn } from "../utils/utils";
import { Pricing } from "./Pricing";
import { CheckList } from "./CheckList";
import { Button } from "./ui/Button";

export const PriceCard = ({
  title,
  description,
  price,
  subText,
  features,
  isFeatured = false,
  headingText = "",
  variant = "default",
  buttonVariant = "primary",
  billingCycle
}: IPriceCardProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-between rounded-md border border-neutral-200 bg-white shadow-sm",
        isFeatured ? "border-indigo-600" : ""
      )}
    >
      {isFeatured && headingText && (
        <div className='rounded-t-lg bg-indigo-50 py-4 text-center text-xl font-semibold text-indigo-700'>
          {headingText}
        </div>
      )}
      <div className='flex h-full flex-col justify-center gap-8 p-4 md:p-8'>
        <div className='flex h-full flex-col space-y-8'>
          <div className='flex flex-col space-y-2'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-neutral-600'>{description}</p>
          </div>

          <Pricing
            price={price}
            subText={subText}
            variant={variant}
            billingCycle={billingCycle}
          />

          <CheckList items={features} />
        </div>

        <Button
          textContent='Buy now'
          variant={buttonVariant}
          size='lg'
          className='w-full justify-center text-center'
        />
      </div>
    </div>
  );
};
