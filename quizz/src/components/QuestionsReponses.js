/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import { useState } from 'react';


/*================  COMPOSANT REPRÉSENTANT LES QUESTIONS ET LES RÉPONSES =================*/
function QuestionsReponses(){
      /// variables d'état = questionCourante + score
      // setQuestionCourante = fonction qui va altérer la variable d'état questionCourante
      // setScore = fonction qui va altérer la variable d'état score
      // useState() = Hook permettant de bénéficier d'un état courant
      const [questionCourante, setQuestionCourante] = useState(0);
      const [score,setScore] = useState(true);

     /// Fonction pour gérer les clicks sur les réponses
     // le click sur une des réponses permet de passer à la question suivante
     const gestionQuestionsClick = () => {
        const questionSuivante = questionCourante + 1;
        if ( questionSuivante === questions.length){
          alert("Nombre max de questions atteint");
        } else {
          setQuestionCourante(questionSuivante);
        }

     }

     // Permet modifier le score du joueur
     const modifScore = (correct) => {
       if (correct){
         setScore(score + 1)
       }
       
     }



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
                  <span> { questionCourante +1} </span>/{questions.length}
                  <h2 className="question"> { questions[questionCourante].question}  </h2>
                  <div className="reponsesContainer">
                    {questions[questionCourante].reponses.map((reponse) => <button onClick={gestionQuestionsClick} className="reponses">  {reponse.reponse} </button>)}

                  </div>
            </div>
            <h2> Votre score est {score} </h2>

          </div>

      </Fragment>
    )
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default QuestionsReponses;
