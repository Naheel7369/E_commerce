import { StatusBar } from "react-native";
import { MainNavigation } from "./Src/Navigation/Main Navigation";
import { Provider } from "react-redux";
import Store from "./Src/Redux/Store";


function App(): React.JSX.Element {


  return (
    <>
    <StatusBar translucent backgroundColor="transparent" />
     <Provider store={Store}>
    <MainNavigation />
    </Provider>
    
    </>
  )
}
export default App;
