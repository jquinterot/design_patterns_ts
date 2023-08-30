/* 
 O - Open Close Principle
 Hardest of all for the definition.
 Entidades de software (clases, modulos, funciones etc) deben estar abiertas para su extension pero cerradas para su modificacion.
 // Realmente confusa como funciona con esa definicion.
*/

import { Question, QuestionType } from "./question.typings";

// se debe agregar aqui la nueva opcion Range = "range"
// enum QuestionType {
//   Boolean = "boolean",
//   MultipleChoice = "multipleChoice",
//   Text = "text",
// }

// type Question = {
//   description: string;
//   type: QuestionType;
//   options?: string[];
// };

export function printQuiz(questions: Question[]) {
  questions.forEach((question) => {
    console.log(question.description);
    /*
      Un Switch statemente es una violacion al principio en muchas ocaciones
      porque que sucede si nosotros queremos agregar un nuevo question type a este switch
      por ejemplo si queremos darle la posibilidad de poner un rango de valores como opcion
      */
    switch (question.type) {
      case "boolean":
        console.log("1. true");
        console.log("2. true");
        break;
      case "multipleChoice":
        question.options!.forEach((option, index) => {
          console.log(` ${index + 1} - ${option}`);
        });
        break;
      case "text":
        console.log("Answer: _______________________");
        break;
      //   case "range":
      //     console.log("Minimum: _________");
      //     console.log("Maximum: _________");
      //     break;
    }
    console.log("");
  });
}

export const questions: Question[] = [
  {
    description: "This is a question",
    type: QuestionType.Boolean,
  },
  {
    description: "What is your favorite Language?",
    type: QuestionType.MultipleChoice,
    options: ["Java", "Php", "C#", "Python", "JS"],
  },
  {
    description: "Describe your favorite JS feature",
    type: QuestionType.Text,
  },
  // Al agregar esto le estamos diciendo a la funcion que debe gestionar este tipo adicional
  // lo que implicaria agregar a la funcion otro case, y esto es algo que no debe suceder por que la idea
  // es que la funcion no se modifique
  //   {
  //     description: "What is the speed limit in your city?",
  //     type: QuestionType.Range,
  //   }
];

// si estamos modificando el codigo por fuera de la funcion, no deberiamos cambiar el codigo interno
// el printQuiz deberia funcionar automaticamente si agregamos un nuevo tipo de pregunta. sin venir a la funcion y agregarla
// Open: habilidad de agregar nuevas cosas, si necesidad de agregar nuevas cosas. de eso habla el principio basicamente
// Pero como hacemos que automaticamente funcione sin la necesidad de agregar codigo?
// ahi es donde viene la idea de poner las cosas de manera mas granular .. smaller conponents ... si ves una cantidad de if absurda casi siempre es una violacion del principio
// entonces lo que se debe hacer es romper el switch en diferentes clases (S - single responsability principle)
