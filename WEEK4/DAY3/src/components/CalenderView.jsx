import { format, isSameDay, addDays, startOfWeek } from 'date-fns';
import { useEventStore } from '../stores/eventStore';

const CalendarView = () => {
  const view = useEventStore((s) => s.view);
  const selectedDate = useEventStore((s) => s.selectedDate);
  const events = useEventStore((s) => s.events);
  const setSelectedDate = useEventStore((s) => s.setSelectedDate);

  const renderDays = () => {
    const days = [];
    const start = startOfWeek(selectedDate);
    for (let i = 0; i < 7; i++) {
      const day = addDays(start, i);
      const dayEvents = events.filter((e) => isSameDay(new Date(e.date), day));
      days.push(
        <div
          key={i}
          className="flex-1 border rounded p-2 hover:bg-blue-50 cursor-pointer"
          onClick={() => setSelectedDate(day)}
        >
          <h4 className="text-sm font-semibold">{format(day, 'EEE dd')}</h4>
          {dayEvents.map((e) => (
            <div key={e.id} className="text-xs text-blue-700">
              {e.title}
            </div>
          ))}
        </div>
      );
    }
    return <div className="grid grid-cols-7 gap-2">{days}</div>;
  };

  const renderDay = () => {
    const dayEvents = events.filter((e) => isSameDay(new Date(e.date), selectedDate));
    return (
      <div className="space-y-2">
        <h3 className="text-lg font-semibold mb-2">{format(selectedDate, 'EEEE, MMM d')}</h3>
        {dayEvents.length > 0 ? (
          dayEvents.map((e) => (
            <div key={e.id} className="p-2 border rounded bg-gray-100">
              {e.title}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No events for this day.</p>
        )}
      </div>
    );
  };

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{view === 'week' ? 'Week View' : 'Day View'}</h2>
        <button
          onClick={() => useEventStore.getState().toggleView()}
          className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Toggle View
        </button>
      </div>
      {view === 'week' ? renderDays() : renderDay()}
    </div>
  );
};

export default CalendarView;
