/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

/*================  COMPOSANT REPRÉSENTANT LES QUESTIONS ET LES RÉPONSES =================*/
function QuestionsReponses(){

      const questions = [
        {
          question : "Quelle est la capitale de l'Italie ? ",
          reponses : [
              { reponse: "Rome" , correct : true},
              { reponse: "Milan" , correct : false},
              { reponse : "Venise" , correct : false},
              { reponse : "Vérone" , correct : false},
          ],

        },
        {
          question : "Quelle est la capitale de l'Allemagne ? ",
          reponses : [
              { reponse: "Hambourg" , correct : false},
              { reponse: "Berlin" , correct : true},
              { reponse : "Munich" , correct : false},
              { reponse : "Cologne" , correct : false},
          ],
        },

        {
          question : "Quelle est la capitale du Luxembourg ? ",
          reponses : [
              { reponse: "Hambourg" , correct : false},
              { reponse: "Dudelange" , correct : false},
              { reponse : "Vianden" , correct : false},
              { reponse : "Luxembourg" , correct : true},
          ],
        }
      ]

    return(
      <Fragment>
          <div className="container">
            <div className="questions">
                  <h1> Bienvenue dans ce Quizz éducatif !!!  </h1>
                  <span>Question 1</span>/{questions.length}
                  <h2 className="question"> { questions[0].question}  </h2>
                  <div className="reponsesContainer">
                    {questions[0].reponses.map((reponse) => <button className="reponses">  {reponse.reponse} </button>)}

                  </div>
            </div>


          </div>

      </Fragment>
    )
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default QuestionsReponses;
