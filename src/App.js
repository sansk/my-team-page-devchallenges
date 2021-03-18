import React from 'react';
import TopSection from './components/TopSection';
import MyTeam from './components/MyTeam';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userList : []
    };
  };

  componentDidMount() {
    fetch('./userList.json')
    .then(response => response.json())
    .then(users => this.setState({ userList: users }))
  };

  render() {
    return (
      <div className="m-4 lg:w-4/5 lg:mx-auto">
        <TopSection />
        <MyTeam userList={this.state.userList}/>
        <Footer />
      </div>
    );
  };
}

export default App;
