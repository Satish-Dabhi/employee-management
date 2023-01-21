export const schema = {
    "title": "",
    "type": "object",
    "required": ["name", "managerName"],
    "properties": {
      "name": {
        "type": "string",
        "title": "Department Name"
      },
      "managerName": {
        "type": "string",
        "title": "Manager Name"
      }
    }
  };
  export const uiSchema = {
    "ui:layout": {
      "name": {
        "md": 12
      },
      "managerName": {
        "md": 12
      }
    }
  };