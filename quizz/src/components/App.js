/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import { Score } from './Score';
import  QuestionsReponses  from './QuestionsReponses';

class App extends React.Component {


  render(){
      return (
        <Fragment>
            <QuestionsReponses>  </QuestionsReponses>
            <Score> </Score>


        </Fragment>
      )
  }
}


/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
