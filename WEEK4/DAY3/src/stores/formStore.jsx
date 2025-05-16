import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFormStore = create(
  persist(
    (set) => ({
      step: 1,
      stepCount: 3,
      formData: {},
      errors: {},

      setStep: (step) => set({ step }),
      setStepCount: (count) => set({ stepCount: count }),
      updateData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
      setErrors: (stepErrors) => set((state) => ({ errors: { ...state.errors, ...stepErrors } })),
      resetForm: () => set({ step: 1, formData: {}, errors: {} }),
      submitForm: () => {
        
        set({ step: 1, formData: {}, errors: {} });
      }
    }),
    { name: 'form-storage' }
  )
);