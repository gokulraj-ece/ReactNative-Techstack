import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
);

export default App;
