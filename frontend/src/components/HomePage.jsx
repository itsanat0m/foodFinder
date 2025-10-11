import QuestionBox from "./QuestionBox";

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
             <button>
                Nomral Button
             </button>
             <p>
                Edit <code>src/App.jsx</code> and save to test HMR
             </p>
             <QuestionBox />
        </div>
    </>
  );
}

export default HomePage;