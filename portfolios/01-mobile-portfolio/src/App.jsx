function App() {
  return (
    <div id="screen" className="relative bg-red-200 min-h-screen">
      <nav className="bg-gray-600 w-full h-[30%] absolute top-0 left-0 z-10"></nav>
      <main className="bg-green-200 h-screen relative">
        <div className="bg-yellow-200 min-h-full">
          {/* Contenido del div amarillo */}
        </div>
        <div className="bg-blue-200 h-[300px]">
          {/* Otro contenido */}
        </div>
      </main>
    </div>
  );
}

export default App;
