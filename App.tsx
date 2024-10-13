/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>
        This is confing for {process.env.MY_VARIABLE}
      </Text>
    </SafeAreaView>
  );
}

export default App;
