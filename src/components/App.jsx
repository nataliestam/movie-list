class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: this.props.data
    }
  }

  render() {
    return (
      <div>
        <h1 data={this.state.data}>MovieList</h1>
        <MovieList />
      </div>
    );
  }
}

window.App = App;