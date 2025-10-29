(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    id: string;
    type: HtmlType;

    constructor(id: string, type: HtmlType) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }
  class InputAttributes {
    value: string;
    placeholder: string;

    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  interface InputEventsProps {
    id: string;
    type: HtmlType;
    value: string;
    placeholder: string;
  }

  class InputEvents {
    constructor() {}
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public events: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement(id, "input");
      this.inputAttributes = new InputAttributes({ value, placeholder });
      this.events = new InputEvents();
    }
     
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();

 
 
