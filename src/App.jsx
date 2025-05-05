// src/App.jsx
import React, { useState } from "react";
import Modal from "./components/Modall";
import DataFetcher from "./components/DataFetcher";
import MountLogger from "./components/MountLogger";
import Timer from "./components/Timer";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogger, setShowLogger] = useState(true);

  return (
    <div className="p-6 space-y-6">

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-semibold">Modal Header</h2>
          <p>This is the modal body.</p>
          <div className="mt-2 text-sm text-gray-500">Modal Footer</div>
        </Modal>
      )}

      <div>
        <h2 className="text-lg font-semibold">Data Fetcher</h2>
        <DataFetcher />
      </div>

      <div>
        <button
          onClick={() => setShowLogger((prev) => !prev)}
          className="text-sm underline text-blue-600"
        >
          Toggle MountLogger
        </button>
        {showLogger && <MountLogger />}
      </div>

      <Timer />
    </div>
  );
};

export default App;
