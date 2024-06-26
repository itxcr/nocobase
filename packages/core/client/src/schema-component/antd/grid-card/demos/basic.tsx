import { getAppComponent } from '@nocobase/test/web';

const App = getAppComponent({
  schema: {
    type: 'void',
    name: 'root',
    'x-decorator': 'GridCard.Decorator',
    'x-use-decorator-props': 'useGridCardBlockDecoratorProps',
    'x-decorator-props': {
      collection: 'roles',
      action: 'list',
      params: {
        pageSize: 2,
      },
    },
    properties: {
      list: {
        type: 'array',
        'x-component': 'GridCard',
        properties: {
          item: {
            type: 'object',
            'x-component': 'GridCard.Item',
            'x-read-pretty': true,
            'x-use-component-props': 'useGridCardItemProps',
            properties: {
              name: {
                type: 'string',
                'x-component': 'CollectionField',
                'x-decorator': 'FormItem',
              },
              title: {
                type: 'string',
                'x-component': 'CollectionField',
                'x-decorator': 'FormItem',
              },
            },
          },
        },
      },
    },
  },
});

export default App;
