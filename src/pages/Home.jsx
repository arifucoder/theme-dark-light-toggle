import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	const handleToggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const Icon = theme === "light" ? FaMoon : FaSun;

	return (
		<div className="min-h-screen dark:bg-[#2C2C2C] w-full" data-theme={theme}>
			<div className="container mx-auto dark:text-[#E4E4E4] py-16">
				<div className="pb-5">
					<button
						onClick={handleToggleTheme}
						className="cursor-pointer dark:bg-[#334155] p-2 rounded-full dark:text-yellow-400 bg-[#2C2C2C]/70 text-white hover:bg-[#2C2C2C]"
					>
						<Icon size={22} />
					</button>
				</div>
				<div className="mt-16">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
						🌗 Build a Dark Mode Toggle in React using Tailwind CSS
					</h2>
					<p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
						This guide shows you how to implement a fully functional dark mode toggle in a React application using
						Tailwind CSS v4+. The toggle works by switching the <code className="text-purple-400">data-theme</code>{" "}
						attribute between
						<code className="text-yellow-300">light</code> and <code className="text-yellow-300">dark</code>. With a few
						lines of CSS and JavaScript, you can allow users to control the theme, and their preference is saved in
						<code className="text-pink-400">localStorage</code> to persist across sessions. This setup uses Tailwind’s
						custom
						<code className="text-pink-400">@custom-variant</code> feature to enable dark mode styling based on an
						attribute instead of relying on system preferences.
					</p>
					<p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
						📖 Reference:{" "}
						<a
							href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
							target="_blank"
							className="text-blue-500 underline"
						>
							Tailwind CSS - Toggling Dark Mode Manually
						</a>
					</p>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">📦 Installation & Setup Steps</h3>
					<pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap">
						{`1. Install Tailwind CSS and React Icons

npm install -D tailwindcss
npm install react-icons

2. Add the following to your CSS file (e.g. index.css or app.css)

@import "tailwindcss";
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

3. Create the component with theme toggle logic

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const Icon = theme === "light" ? FaMoon : FaSun;

  return (
    <div className="min-h-screen dark:bg-[#2C2C2C] w-full" data-theme={theme}>
      <div className="container mx-auto dark:text-[#E4E4E4] py-16">
        <div className="pb-5">
          <button
            onClick={handleToggleTheme}
            className="cursor-pointer dark:bg-[#334155] p-2 rounded-full dark:text-yellow-400 bg-[#2C2C2C]/70 text-white hover:bg-[#2C2C2C]"
          >
            <Icon size={22} />
          </button>
        </div>
        <p className="text-gray-800 dark:text-gray-300">
          This paragraph demonstrates how Tailwind's dark mode works using the data-theme attribute and dark: variants. Click the button above to toggle between light and dark mode. Your preference is saved in localStorage and persists on reload.
        </p>
      </div>
    </div>
  );
};

export default Home;
`}
					</pre>
				</div>
			</div>
		</div>
	);
};

export default Home;
