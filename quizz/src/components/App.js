/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import  QuestionsReponses  from './QuestionsReponses';

/*============ CLASSE PRINCIPALE DE L'APPLICATION =============================================*/
class App extends React.Component {


  render(){
      return (
        <Fragment>
            <QuestionsReponses>  </QuestionsReponses>
        


        </Fragment>
      )
  }
}


/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
