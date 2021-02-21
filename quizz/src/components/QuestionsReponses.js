/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

/*================  COMPOSANT REPRÉSENTANT LES QUESTIONS ET LES RÉPONSES =================*/
class QuestionsReponses extends React.Component {


  render(){
    return(
      <Fragment>
          <div className="container">
            <div className="questions">
                  <h1> Qu'est-ce qu'un Objet ?  </h1>
                    <button className="reponses"> Une représentation d'une chose matérielle ou immatérielle  </button>
                    <button className="reponses"> Un objet du monde réel  </button>
                    <button className="reponses"> Une représentation d'un objet du monde réel </button>
                    <button className="reponses">  Une représentation d'un objet du monde réel </button>
            </div>


          </div>

      </Fragment>
    )
  }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default QuestionsReponses;
