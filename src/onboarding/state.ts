import { atomWithLocalStorage } from "@habla/storage";

type OnboardingStep =
  | "account-creation"
  | "backup-keys"
  | "fill-profile"
  | "add-relays"
  | "discover-zaps";

type OnboardingProgress = Record<OnboardingStep, boolean>;

export const initialSteps: OnboardingProgress = {
  "account-creation": true,
  "backup-keys": false,
  "fill-profile": false,
  "add-relays": false,
  "discover-zaps": false,
};

export const stepsAtom = atomWithLocalStorage<OnboardingProgress>(
  "onboarding",
  initialSteps
);
