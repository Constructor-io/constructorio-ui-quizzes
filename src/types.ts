export interface QuestionOption extends Record<string, any> {
  id: number;
  value: string;
  attribute?: {
    name: string;
    value: string;
  };
  images?: Partial<QuestionImages>;
}

export interface QuestionImages extends Record<string, any> {
  primary_url: string;
  primary_alt: string;
  secondary_url: string;
  secondary_alt: string;
}

export interface Question extends Record<string, any> {
  id: number;
  title: string;
  description: string;
  type: 'single' | 'multiple' | 'open' | 'cover';
  cta_text: string;
  images?: Partial<QuestionImages>;
  options?: QuestionOption[];
  input_placeholder?: string;
}

export interface NextQuestionResponse extends Record<string, any> {
  next_question: Partial<Question>;
  is_last_question?: boolean;
  version_id?: string;
}
