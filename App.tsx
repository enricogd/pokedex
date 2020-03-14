/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import TodoItem from './src/_components/PokemonCard';


interface ITodo {
  id: string,
  value: string
}

function App() {

  
  const [todoList, setTodoList] = useState<Array<ITodo>>([])


  const addTodoHandler = (newTodo: ITodo) => (
    setTodoList(currentList => [...currentList, newTodo])
  )

  return (
    <View>

    </View>
  );
};

export default App;
