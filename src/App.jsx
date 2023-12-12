// Import the AddTask and ListTasks components
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTask";

// Define the main App component
function App() {
  return (
    <>
      {/* Main section with Tailwind CSS grid and centering styles */}
      <section className=" grid place-items-center h-screen bg-slate-950 text-white">
        <div className="bg-black p-3 justify-center text-center">
          <h1 className="font-bold font-serif font">Todo APP</h1>
        </div>
        {/* Container with shadow and padding */}
        <div className="shadow-2xl p-6 bg-slate-400">
          <AddTask />
          <ListTasks />
        </div>
      </section>
    </>
  );
}

export default App;
