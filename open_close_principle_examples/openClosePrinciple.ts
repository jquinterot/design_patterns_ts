/*
La idea principal seria dividir en clases todas y cada uno de las preguntas 
haciendo que cuando llamemos a la printQuiz ... lo unico que nos debemos preocupar es de crear una nueva clase
https://www.youtube.com/watch?v=-ptMtJAdj40
*/

interface BaseQuestion {
  description: string;
  printQuestionChoices: () => void;
}

class BooleanQuestion implements BaseQuestion {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  printQuestionChoices(): void {
    console.log("1. True");
    console.log("1. False");
  }
}

class MultipleQuestion implements BaseQuestion {
  private options: string[];
  description: string;

  constructor(description: string, options: string[]) {
    this.description = description;
    this.options = options;
  }

  getDescription(): string {
    return this.description;
  }

  getOptions(): string[] {
    return this.options;
  }

  printQuestionChoices(): void {
    this.getOptions().forEach((option, index) => {
      console.log(` ${index + 1} - ${option}`);
    });
  }
}

class TextQuestion implements BaseQuestion {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  printQuestionChoices(): void {
    console.log("Answer: _______________________");
  }
}

class RangeQuestion implements BaseQuestion {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  printQuestionChoices(): void {
    console.log("Minimum: _________");
    console.log("Maximum: _________");
  }
}

//  Todo lo que hace es imprimir, queda mucho mas simple de lo que hacia antes.
//  Individual clases that know what to do.
//  Si agregarmos un nuevo tipo de preguntar jamas tenemos que tocar este metodo porque esta completamente cerrada la implementacion
//  abierto para ser extendido  porque se puede agregar nuevas clases y cerrado para cambios pero extendible para poder agregar mas cosas.
export function printQuizOpenPrinciple(questions: BaseQuestion[]) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

export const questionsOpenPrinciple = [
  new BooleanQuestion("This principle is useful"),
  new MultipleQuestion("What is your favorite Language?", [
    "Jave",
    "Php",
    "C#",
    "Python",
    "JS",
  ]),
  new TextQuestion("Describe your favorite JS Feature"),
  new RangeQuestion("What is the speed limit in your city?"),
];

// Notas personal un poco overkill hacer esto, para mi es algo que no siempre se debe seguir ... cuando se pueda se debe seguir pero cuando no
// Refacto de code cuando se vean cadenas condicionales o switch
// Se puede olvidar, cuando se debe agregar algo nuevo al if y de esta forma no se olvida

// The open-closed principle allows for easier extension while reducing time
// spent adapting existing code. By designing your modules into composable parts, you foster a flexible and scalable application.
