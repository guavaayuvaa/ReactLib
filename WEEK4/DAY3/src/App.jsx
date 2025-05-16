import React from 'react';
import CalendarView from './components/CalenderView';
import { useEventStore } from './stores/EventStore';
import { format } from 'date-fns';

function App() {
  const selectedDate = useEventStore(state => state.selectedDate);
  const toggleModal = useEventStore(state => state.toggleModal);
  const modalOpen = useEventStore(state => state.modalOpen);
  const addEvent = useEventStore(state => state.addEvent);

  const handleAddEvent = () => {
    const title = prompt('Event Title');
    if (title) {
      addEvent({
        id: Date.now(),
        title,
        date: selectedDate.toISOString(),
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Calendar ({format(new Date(selectedDate), 'PPP')})
          </h1>
          <button
            onClick={handleAddEvent}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + Add Event
          </button>
        </header>

        <CalendarView />

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-lg font-semibold mb-2">Modal Placeholder</h2>
              <button
                onClick={toggleModal}
                className="mt-4 text-sm text-blue-500 underline"
              >
                Close
              </button>
            </div>
            
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
