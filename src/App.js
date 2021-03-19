import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/first'
import Second from './components/second'
import Welcome from './components/welcome'
import Hello from './components/hello'
import WelcomeVisitor from './components/welcomevisitor'
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from  './components/ParentComponent'
import ChildComponent from './components/ChildComponent'
import Namelist from  './components/Namelist'
import PersonList from './components/Personlist'
import LoginForm from './components/LoginForm'
import Form from './components/Form';
import FormTest from './components/formTest'
import ParentComp from './components/ParentComp'
import LifecycleA  from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentC from './components/ComponentC'
import ComponentContextC from './components/UseContext/ComponentC'
import HookCounter from './components/hooks/HookCounter'
import HookCounterOne from './components/useEffect/HookCounterOne'
import UseEffectCounterTwo from './components/useEffect/HookCounterTwo'
import DataFetching from './components/useEffect/DataFetching'
import HookCounterTwo from './components/hooks/HookCounterTwo'
import HookCounterThree from './components/hooks/HookCounterThree'
import HookCounterFour from './components/hooks/HookCounterFour'
import { UserProvider } from './components/userContext'
import Container from './container'
import RefsDemo from './components/RefsDemo'
// useReducer
import CounterOne from './components/useReducer/CounterOne'
import CounterTwo from './components/useReducer/CounterTwo'
import CounterThree from './components/useReducer/CounterThree'

import ComponentA_R from './components/useReducer/ComponentA_R'
import ComponentB_R from './components/useReducer/ComponentB_R'
import ComponentC_R from './components/useReducer/ComponentC_R'

import DataFetchingOne from './components/useReducer/DataFetchingOne'
import DataFetchingTwo from './components/useReducer/DataFetchingTwo'

//useCallBack
import ParentComponentCall from './components/useCallBack/ParentComponent'
//useMemo
import CounterMemo from './components/useMemo/Counter'





// ParentComp for purecomponent
//ClickCounter and HoverCounter for HOC demo

//UseReducer for multiple component passind state


// HOC
import ClickCounter1 from './components/Hoc_example/ClickCounter'
import HoverCounter1 from './components/Hoc_example/HoverCounter'
const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}
//UseContext example
export const CountContext = React.createContext()

//UseContext example
export const UserContext = React.createContext()
export const SecondContext = React.createContext()

function  App () {
  const [count, dispatch] = useReducer(reducer, initialState)
    return (
      <div className="App">
        {/* <CounterMemo></CounterMemo> */}
        {/* <UseEffectCounterTwo/> */}
        {/* <UserContext.Provider value={"Pankaj"}>
          <SecondContext.Provider value={"Bhardwaj"}>
            <ComponentContextC />
          </SecondContext.Provider>
        </UserContext.Provider> */}

{/* <CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		> */}
				{/* <CounterOne /> */}
				{/* <CounterTwo /> */}
				{/* <CounterThree /> */}
				{/* {count} */}
        {/* count --- {count}
				<ComponentA_R />
				<ComponentB_R />
				<ComponentC_R />
		</CountContext.Provider> */}

    {/* <ParentComponentCall/> */}

        {/* <CounterOne/>
        <CounterTwo/> */}
        {/* <CounterThree/> */}
      {/* <Container/> */}
        {/* <HookCounter / > */}
        {/* <HookCounterTwo / > */}
        {/* <DataFetching/> */}
        {/* <ComponentC /> */}
        {/* <FragmentDemo /> */}
        {/* <ClickCounter name='pankaj'/>
        <HoverCounter /> */}
        {/* <LifecycleA /> */}
        {/* <FormTest /> */}
        {/* <ParentComp />
        <RefsDemo/> */}
        {/* <ParentComponent /> */}
        {/* <PersonList /> */}
        {/* <LoginForm /> */}
        {/* <Namelist /> */}
      
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter />
        <WelcomeVisitor /> */}
        {/* <First name = 'Pankaj' sirName = 'Bhardwaj'>
          <p>This is children Props</p>
          <p>This is children Props</p>
          <p>This is children Props</p>
          <p>This is children Props</p>
          <p>This is children Props</p>
        </First>
        <First name = 'XYZ' sirName = 'SDGF'>
        <button>Action</button>
        </First> */}
        {/* <First name = 'Subhi' sirName = 'Mishra'/> */}
        {/* <Welcome name = 'Pankaj' sirName = 'Bhardwaj'/> */}
        {/* <Second />
        <Hello /> */}


      {/*Hoc component example*/}
      <ClickCounter1 name="Pankaj"/>
      <HoverCounter1 name="PKB"/>
      </div>
    );
}

export default App;
