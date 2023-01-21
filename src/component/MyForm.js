import * as React from 'react';
import { Theme5 as Mui5Theme } from '@rjsf/material-ui';
import { withTheme } from '@rjsf/core';


export default function MyForm(props) {
  const data = {
    managerName: "888989",
    name: "mn njvfjdgfdg"
  }
  const {onSubmit} = props;
  const {onUpdate} = props;
  const JsonForm = withTheme(Mui5Theme);
  console.log("props.formData",props.formData);
  return (
    <JsonForm
      schema={props.schema}
      uiSchema={props.uiSchema}
      formData={props.formData ? props.formData : {}}
      onSubmit={props.formData ? onUpdate : onSubmit}
    >
    </JsonForm>
  );
}
