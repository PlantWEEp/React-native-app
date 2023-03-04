import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import NewCard from './compoents/NewCard';
import Elevatedcard from './compoents/Elevatedcard';
import ActionCard from './compoents/ActionCard';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <NewCard />
          <Elevatedcard />
          <ActionCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
