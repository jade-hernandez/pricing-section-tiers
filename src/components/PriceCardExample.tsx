import { useState } from "react";
import { basicFeatures, premiumFeatures, standardFeatures } from "../data/feature-data";
import { PriceCard } from "./PriceCard";
import SegmentedControl from "./ui/SegmentedControl";
import type { TBillingCycle } from "./Pricing";

export type TVariant = "default" | "highlighted";
export type TButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "linkColor"
  | "linkGray"
  | "destructive";

export interface IPricingPlan {
  title: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  annualTotal: string;
  features: string[];
  isFeatured?: boolean;
  headingText?: string;
  variant?: TVariant;
  buttonVariant?: TButtonVariant;
}

export interface IPriceCardProps extends Omit<
  IPricingPlan,
  "monthlyPrice" | "annualPrice" | "annualTotal"
> {
  price: string;
  subText: string;
  billingCycle: TBillingCycle;
}

const pricingPlans: IPricingPlan[] = [
  {
    title: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    monthlyPrice: "9.99",
    annualPrice: "6.99",
    annualTotal: "84",
    features: basicFeatures,
    buttonVariant: "secondary"
  },
  {
    title: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    monthlyPrice: "19.99",
    annualPrice: "15.99",
    annualTotal: "192",
    features: standardFeatures,
    isFeatured: true,
    headingText: "Most Popular",
    variant: "highlighted"
  },
  {
    title: "Premium Plan",
    description: "Experience limitless living for power users",
    monthlyPrice: "29.99",
    annualPrice: "25.99",
    annualTotal: "312",
    features: premiumFeatures,
    buttonVariant: "secondary"
  }
];

export const PriceCardExample = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className='flex flex-col items-center gap-12 bg-white p-3 py-12 md:gap-16 md:p-4 md:py-16 lg:p-24'>
      <div className='flex flex-col items-center gap-10 text-center'>
        <div className='flex flex-col gap-5 md:px-8 lg:px-40'>
          <div className='flex flex-col gap-3'>
            <span className='text-base font-semibold text-indigo-700'>Pricing Tiers</span>
            <h1 className='text-3xl font-semibold text-neutral-900 md:text-5xl'>
              Fit for all your needs
            </h1>
          </div>
          <p className='text-lg text-neutral-600 md:text-xl'>
            Pick the plan that suits you today and step up as your demands grow - our flexible
            options have your journey mapped out.
          </p>
        </div>
        <SegmentedControl
          options={["Monthly", "Annually"]}
          value={isAnnual ? "Annually" : "Monthly"}
          onChange={value => setIsAnnual(value === "Annually")}
        />
      </div>

      <div className='flex w-full flex-col gap-6 md:gap-8 lg:flex-row'>
        {pricingPlans.map((plan, index) => (
          <PriceCard
            key={index}
            {...plan}
            price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
            subText={isAnnual ? `Billed annually ($${plan.annualTotal})` : "Billed monthly"}
            billingCycle={isAnnual ? "year" : "month"}
          />
        ))}
      </div>
    </div>
  );
};
