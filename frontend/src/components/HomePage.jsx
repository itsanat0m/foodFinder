

const HomePage = () => {
  return (
    <>
        <div>
            <header>
                <h1>My Simple React Home Page</h1>
            </header>
            <main>
                <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
            </main>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>cd
        </div>
    </>
  );
}

export default HomePage;