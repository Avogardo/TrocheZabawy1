import React, { Component } from 'react';
import './App.css';
import MinMax from './MinMax.js';
import Lacz from './Lacz.js';
import Sum from './Sum.js';
import HigherLowerEqual from './HigherLowerEqual.js';
import Kwadraty from './Kwadraty.js';

class App extends Component {
render() {
	return (
	<div className="App">
		<Lacz  invite={['zapros', 'jakas', 'dziewczyne', 'na', 'kawe', 'do', 'siebie', 'i', 'wygrzejcie', 'sie', 'razem']} separator="*"/>
		<MinMax someNumbers={[1,-4,5,6]}/>
		<Kwadraty in={[1, 2, 7, 3]}/>
		<Sum in={['1', '2', '7', 3]}/>
		<HigherLowerEqual someNumbers={[-2, 4, 9, 4.23, 6]} x={4.23}/>
	</div>
    );
  }
}

export default App;
