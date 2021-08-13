import {Route,Switch,Redirect} from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes';
import NewQuotes from './components/pages/NewQuotes';
import QuoteDetails from './components/pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';
function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to ='/quotes' exact/>
        </Route>
      <Route path='/quotes' exact >
        <AllQuotes></AllQuotes>
      </Route>
      <Route path='/quotes/:quoteId'>
      <QuoteDetails></QuoteDetails> 
      </Route>
      <Route path='/new-quotes'>
      <NewQuotes></NewQuotes>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
