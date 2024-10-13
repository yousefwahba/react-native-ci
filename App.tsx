/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  console.log('env', process.env.app_name, process.env.MY_VARIABLE);
  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>
        This is the configuration for {process.env.app_name}
      </Text>
    </SafeAreaView>
  );
}

export default App;
