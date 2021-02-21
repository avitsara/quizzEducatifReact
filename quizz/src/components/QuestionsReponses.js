/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

/*================  COMPOSANT REPRÉSENTANT LES QUESTIONS ET LES RÉPONSES =================*/
function QuestionsReponses(){

      const questions = [
        {
          question : "Quelle est la capitale de l'Italie",
          reponses : [
              { reponse: "Rome" , correct : true},
              { reponse: "Milan" , correct : false},
              { reponse : "Venise" , correct : false},
              { reponse : "Vérone" , correct : false},
          ],

        },
        {
          question : "Quelle est la capitale de l'Allemagne",
          reponses : [
              { reponse: "Hambourg" , correct : false},
              { reponse: "Berlin" , correct : true},
              { reponse : "Munich" , correct : false},
              { reponse : "Cologne" , correct : false},
          ],
        }
      ]

    return(
      <Fragment>
          <div className="container">
            <div className="questions">
                  <h1> { questions[0].question}</h1>
                  <div className="questions">
                    <button className="reponses"> {questions[0].reponses[0].reponse} </button>
                    <button className="reponses"> {questions[0].reponses[1].reponse} </button>
                    <button className="reponses"> {questions[0].reponses[2].reponse} </button>
                    <button className="reponses"> {questions[0].reponses[3].reponse} </button>


                  </div>
            </div>


          </div>

      </Fragment>
    )
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default QuestionsReponses;
