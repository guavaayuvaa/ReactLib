import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { isSameDay } from 'date-fns';

export const useEventStore = create(
  persist(
    (set, get) => ({
      events: [],
      selectedDate: new Date(),
      modalOpen: false,
      view: 'week',

      addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
      removeEvent: (id) => set((state) => ({ events: state.events.filter(e => e.id !== id) })),
      setSelectedDate: (date) => set({ selectedDate: date }),
      toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen })),
      toggleView: () => set((state) => ({ view: state.view === 'week' ? 'day' : 'week' })),
      eventsForSelectedDate: () => get().events.filter(e => isSameDay(new Date(e.date), new Date(get().selectedDate)))
    }),
    { name: 'event-storage' }
  )
);
