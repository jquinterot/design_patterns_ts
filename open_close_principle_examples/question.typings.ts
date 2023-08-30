export enum QuestionType {
  Boolean = "boolean",
  MultipleChoice = "multipleChoice",
  Text = "text",
  Range = "range",
}

export type Question = {
  description: string;
  type: QuestionType;
  options?: string[];
};
