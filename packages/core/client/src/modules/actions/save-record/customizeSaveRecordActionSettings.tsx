/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { useFieldSchema } from '@formily/react';
import { isValid } from '@formily/shared';
import { useSchemaToolbar } from '../../../application';
import { SchemaSettings } from '../../../application/schema-settings/SchemaSettings';
import {
  AfterSuccess,
  AssignedFieldValues,
  ButtonEditor,
  RemoveButton,
  SecondConFirm,
  SkipValidation,
  WorkflowConfig,
  RefreshDataBlockRequest,
} from '../../../schema-component/antd/action/Action.Designer';

export const customizeSaveRecordActionSettings = new SchemaSettings({
  name: 'actionSettings:saveRecord',
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'secondConfirmation',
      Component: SecondConFirm,
    },
    {
      name: 'assignFieldValues',
      Component: AssignedFieldValues,
    },
    {
      name: 'skipRequiredValidation',
      Component: SkipValidation,
    },
    {
      name: 'afterSuccessfulSubmission',
      Component: AfterSuccess,
      useVisible() {
        const fieldSchema = useFieldSchema();
        return isValid(fieldSchema?.['x-action-settings']?.onSuccess);
      },
    },
    {
      name: 'bindWorkflow',
      Component: WorkflowConfig,
    },
    {
      name: 'refreshDataBlockRequest',
      Component: RefreshDataBlockRequest,
      useComponentProps() {
        return {
          isPopupAction: false,
        };
      },
    },
    {
      name: 'delete',
      sort: 100,
      Component: RemoveButton as any,
      useComponentProps() {
        const { removeButtonProps } = useSchemaToolbar();
        return removeButtonProps;
      },
    },
  ],
});
