import Phone from './components/Phone';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  
  return (
    <div className="App container-fluid">
      <div className="row h-100 align-items-center">
        <div className="col-lg phone-col align-self-center ">
          <Phone/>
        </div>
        <div className="col-lg text-col ">
          {/* <div className="w-75 mx-auto text-center "> */}
            <h1>Simple booking</h1>
            <p>
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}


export default App;
