import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchComponent } from './components/Search/SearchPage';
import { ShowComponent } from './components/Show/ShowPage';
import { HeaderTitle } from './App.components';

function App() {
  return (
		<div className="App">
			<HeaderTitle>NASA Media Library</HeaderTitle>
			<div>
				<SearchComponent />
				{/* <ShowComponent /> */}
			</div>
		</div>
  );
}

export default App;
