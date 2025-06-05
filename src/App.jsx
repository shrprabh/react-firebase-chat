import List from "./components/list/list";
import Chat from "./components/chat/chat";
import Details from "./components/detail/detail";
import Login from "./components/list/login/login";
import Notification from "./components/notification/notification";
const App = () => {
  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
