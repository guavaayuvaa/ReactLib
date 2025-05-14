import { useReducer } from 'react';
import { formReducer, initialState } from '../reducers/formReducer';

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, personal, address } = state;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg space-y-4">
      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
          <input
            className="block w-full mb-2 p-2 border rounded"
            placeholder="Name"
            value={personal.name}
            onChange={(e) => dispatch({ type: 'UPDATE_PERSONAL', payload: { name: e.target.value } })}
          />
          <input
            className="block w-full mb-2 p-2 border rounded"
            placeholder="Email"
            value={personal.email}
            onChange={(e) => dispatch({ type: 'UPDATE_PERSONAL', payload: { email: e.target.value } })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch({ type: 'NEXT' })}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Address Info</h2>
          <input
            className="block w-full mb-2 p-2 border rounded"
            placeholder="City"
            value={address.city}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', payload: { city: e.target.value } })}
          />
          <input
            className="block w-full mb-2 p-2 border rounded"
            placeholder="CODE"
            value={address.zip}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', payload: { zip: e.target.value } })}
          />
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch({ type: 'PREV' })}
            >
              Back
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch({ type: 'NEXT' })}
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Confirm</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify({ personal, address }, null, 2)}</pre>
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch({ type: 'PREV' })}
            >
              Back
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => alert('Form submitted!')}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;
