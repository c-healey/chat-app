import Phone from './components/Phone';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  
  return (
    <div className="App container-fluid">
      <div className="row h-100 align-items-center">
        <main className="col-lg phone-col align-self-center ">
          <Phone/>
        </main>
        <header className="col-lg text-col ">
          {/* <div className="w-75 mx-auto text-center "> */}
            <h1>Simple booking</h1>
            <p>
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          {/* </div> */}
        </header>
      </div>
      <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="/">Catherine Healey</a>.
  </div>
    </div>
  );
}


export default App;
