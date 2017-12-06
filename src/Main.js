// insert export statements later

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={QuestionPage}/>
          <Route path='/QuestionPage' component={QuestionPage}/>
          <Route path='/ReviewPage' component={ReviewPage}/>
        </Switch>
      </main>
    );
  }
}

// insert export statements later
