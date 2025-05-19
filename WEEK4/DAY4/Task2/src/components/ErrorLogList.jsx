import { useGetErrorLogsQuery } from '../services/errorLogsApi';

export default function ErrorLogList() {
  const {
    data: logs,
    error,
    isLoading,
    isFetching,
  } = useGetErrorLogsQuery();

  if (isLoading) return <p className="text-blue-600">Loading error logs...</p>;
  if (error) return <p className="text-red-600">Error loading logs</p>;

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">Error Logs {isFetching && <span>(Updating...)</span>}</h2>
      <ul className="list-disc ml-4">
        {logs?.slice(0, 10).map((log) => (
          <li key={log.id}>
            <strong>{log.title}</strong>: {log.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
