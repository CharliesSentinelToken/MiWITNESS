import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <header className="mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Advocacy NFT Visual Template
        </h1>
        <p className="text-lg text-gray-200 max-w-xl text-center">
          This starter gives you a modern NFT site look. Customize it with your own skills, AI bots, and advocacy features!
        </p>
      </header>
      <main className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-xl flex flex-col items-center">
          <img
            src="https://placehold.co/300x200/png?text=NFT+Image"
            alt="NFT Example"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">NFT/Advocacy Card</h2>
          <p className="text-gray-300 text-center">
            You can put your AI or legal advocacy modules here. Replace this with your actual functionality!
          </p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-xl flex flex-col items-center">
          <img
            src="https://placehold.co/300x200/png?text=Another+Card"
            alt="Another Card"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">Custom Skill Card</h2>
          <p className="text-gray-300 text-center">
            Add more cards, buttons, or interactive features as you build out your site.
          </p>
        </div>
      </main>
      <footer className="mt-20 text-gray-400 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Advocacy Project
      </footer>
    </div>
  );
}

export default App;
