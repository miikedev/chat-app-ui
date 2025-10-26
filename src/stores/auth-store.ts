import { create } from "zustand";

type SubmittedData = {
  username?: string;
  email: string;
  password: string;
};

type AuthState = {
  selectedTab: "sign-in" | "sign-up";
  formData: {
    username: string;
    email: string;
    password: string;
  };
  validationErrors: Record<string, string>;
  submitted: SubmittedData | null;

  // Actions
  setTab: (tab: "sign-in" | "sign-up") => void;
  updateField: (field: string, value: string) => void;
  setValidationErrors: (errors: Record<string, string>) => void;
  clearErrors: () => void;
  setSubmitted: (data: SubmittedData | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  selectedTab: "sign-in",
  formData: {
    username: "",
    email: "",
    password: "",
  },
  validationErrors: {},
  submitted: null,

  setTab: (tab) => set({ selectedTab: tab }),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  setValidationErrors: (errors) => set({ validationErrors: errors }),
  clearErrors: () => set({ validationErrors: {} }),
  setSubmitted: (data) => set({ submitted: data }),
}));
