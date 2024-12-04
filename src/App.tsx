import React from 'react';
import { Form } from './components/Form';

function App() {
  return (
    <div>
      <header className="p-3 text-lg shadow-md shadow-gray-300 bg-white">
        <div className="md:max-w-screen-xl m-auto">
          <span className="text-blue-950 font-extrabold">Electricity</span>
          <span className="text-neutral-600">Calculator</span>
        </div>
      </header>
      <div className="py-10 md:max-w-screen-xl m-auto">
        <Form />
      </div>
    </div>
  );
}

export default App;
