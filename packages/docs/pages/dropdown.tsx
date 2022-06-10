import { Button, Dropdown, Grid, H1, Panel, Text } from '@bigcommerce/big-design';
import {
  AssignmentIcon,
  DeleteIcon,
  EditIcon,
  FileCopyIcon,
  OpenInNewIcon,
} from '@bigcommerce/big-design-icons';
import React, { Fragment } from 'react';

import {
  Code,
  CodePreview,
  ContentRoutingTabs,
  GuidelinesTable,
  List,
  NextLink,
} from '../components';
import {
  DropdownItemGroupPropTable,
  DropdownItemPropTable,
  DropdownLinkItemPropTable,
  DropdownPropTable,
} from '../PropTables';

const DropdownPage = () => {
  return (
    <>
      <H1>Dropdown</H1>

      <Panel header="Overview" headerId="overview">
        <Text>
          <Code primary>Dropdowns</Code> are toggleable, contextual overlays for displaying list of
          items from which a user can select one item. A selected item can be a link or an action.
        </Text>
        <Text bold>When to use:</Text>

        <List>
          <List.Item>
            Use to hide secondary actions or links in order to reduce distraction.
          </List.Item>
          <List.Item>
            Use for a set of actions that don’t fit in the available screen space (including
            overflow).
          </List.Item>
          <List.Item>
            Use when actions’ names are very long or actions require additional description.
          </List.Item>
        </List>
      </Panel>

      <Panel header="Implementation" headerId="implementation">
        <ContentRoutingTabs
          id="implementation"
          routes={[
            {
              id: 'basic',
              title: 'Basic',
              render: () => (
                <Fragment key="basic">
                  <Text>
                    <Code primary>Dropdowns</Code> are toggleable, contextual overlays for
                    displaying lists.
                  </Text>
                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Dropdown
                      items={[
                        {
                          content: 'Edit',
                          onItemClick: (item) => item,
                          hash: 'edit',
                          icon: <EditIcon />,
                        },
                        {
                          content: 'Duplicate',
                          onItemClick: (item) => item,
                          hash: 'duplicate',
                          icon: <FileCopyIcon />,
                        },
                        {
                          content: 'Copy',
                          onItemClick: (item) => item,
                          hash: 'copy',
                          icon: <AssignmentIcon />,
                          disabled: true,
                          tooltip: 'You cannot copy this item...',
                        },
                        {
                          content: 'Delete',
                          onItemClick: (item) => item,
                          hash: 'delete',
                          icon: <DeleteIcon />,
                          actionType: 'destructive',
                        },
                        {
                          content: 'Link',
                          icon: <OpenInNewIcon />,
                          type: 'link',
                          url: '#',
                        },
                      ]}
                      maxHeight={250}
                      placement="bottom-start"
                      toggle={<Button>Open menu</Button>}
                    />
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'links',
              title: 'Links',
              render: () => (
                <Fragment key="links">
                  <Text>
                    A <Code primary>Dropdown</Code> can render a list of{' '}
                    <NextLink href="/link">Links</NextLink> if it receives an object of type{' '}
                    <Code>LinkItem</Code>.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Dropdown
                      items={[
                        { content: 'Item', type: 'link', url: '#' },
                        { content: 'Item', type: 'link', url: '#' },
                        { content: 'Item', type: 'link', url: '#', target: '_blank' },
                      ]}
                      toggle={<Button>Button</Button>}
                    />

                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'icons',
              title: 'Icons',
              render: () => (
                <Fragment key="icons">
                  <Text>
                    An <Code primary>item</Code> accepts an <NextLink href="/icons">Icon</NextLink>{' '}
                    component to render.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Dropdown
                      items={[
                        { content: 'Item', icon: <EditIcon />, onItemClick: (item) => item },
                        { content: 'Link', icon: <OpenInNewIcon />, type: 'link', url: '#' },
                      ]}
                      toggle={<Button>Button</Button>}
                    />
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'action-types',
              title: 'Action types',
              render: () => (
                <Fragment key="action-types">
                  <Text>
                    There are two action types: <Code>normal</Code> &amp; <Code>destructive</Code>.
                    They are used to indicate the nature of the action when hovering on the item.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Dropdown
                      items={[
                        { content: 'Save', onItemClick: (item) => item, actionType: 'normal' },
                        {
                          content: 'Delete',
                          onItemClick: (item) => item,
                          actionType: 'destructive',
                        },
                      ]}
                      toggle={<Button>Button</Button>}
                    />
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'toggle',
              title: 'Toggle',
              render: () => (
                <Fragment key="toggle">
                  <Text>
                    <Code primary>Dropdown</Code> can be anchored to any <Code>ReactElement</Code>,
                    including all types of <NextLink href="/button">Buttons</NextLink>.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Grid gridColumns="repeat(4, min-content)">
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        toggle={<Button>Button</Button>}
                      />
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        toggle={<Button actionType="destructive">Button</Button>}
                      />

                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        toggle={<Button variant="secondary">Button</Button>}
                      />

                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        toggle={<Button variant="subtle">Button</Button>}
                      />
                    </Grid>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'placement',
              title: 'Placement',
              render: () => (
                <Fragment key="placement">
                  <Text>
                    <Code primary>Dropdown</Code> can be anchored in different directions with the{' '}
                    <Code primary>placement</Code> property. It will automatically find a placement
                    if there's not enough space in the chosen direction.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Grid gridColumns="repeat(4, min-content)">
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        placement="right"
                        toggle={<Button>Right</Button>}
                      />
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        placement="top"
                        toggle={<Button>Top</Button>}
                      />
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        placement="bottom-start"
                        toggle={<Button>Bottom-Start</Button>}
                      />
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        placement="bottom-end"
                        toggle={<Button>Bottom-End</Button>}
                      />
                    </Grid>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'max-height',
              title: 'Max height',
              render: () => (
                <Fragment key="max-height">
                  <Text>
                    Once the content is longer than the max-height, the{' '}
                    <Code primary>Dropdown</Code> will be scrollable. It is possible to modify the
                    dimension by passing a <Code primary>maxHeight</Code> property.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Grid gridColumns="repeat(3, min-content)">
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        toggle={<Button>Default</Button>}
                      />
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        maxHeight={150}
                        toggle={<Button>Smaller</Button>}
                      />
                      <Dropdown
                        items={[
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                          { content: 'Item', onItemClick: (item) => item },
                        ]}
                        maxHeight={350}
                        toggle={<Button>Longer</Button>}
                      />
                    </Grid>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'item-groups',
              title: 'Item groups',
              render: () => (
                <Fragment key="item-groups">
                  <Text>
                    Create <Code primary>Dropdowns</Code> with labeled groupings by passing{' '}
                    <Code primary>DropdownItemGroup</Code>'s to the Dropdown's{' '}
                    <Code primary>options</Code> property.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Dropdown
                      items={[
                        {
                          label: 'Label 1',
                          items: [
                            { content: 'Option 1', onItemClick: (item) => item },
                            { content: 'Option 2', onItemClick: (item) => item },
                            { content: 'Option 3', onItemClick: (item) => item },
                          ],
                        },
                        {
                          label: 'Label 2',
                          items: [
                            { content: 'Option 4', onItemClick: (item) => item },
                            { content: 'Option 5', onItemClick: (item) => item },
                            { content: 'Option 6', onItemClick: (item) => item },
                          ],
                        },
                      ]}
                      toggle={<Button>Button</Button>}
                    />
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'item-description',
              title: 'Item description',
              render: () => (
                <Fragment key="Item description">
                  <Text>
                    It is possible to add a <Code>description</Code> for items.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Dropdown
                      items={[
                        {
                          hash: '1',
                          content: 'Item #1',
                          description: 'Description for option #1',
                          onItemClick: (item) => item,
                        },
                        {
                          content: 'Item #2',
                          description: 'Description for item #2',
                          disabled: true,
                          type: 'link',
                          url: '#',
                        },
                        { hash: '3', content: 'Item #3', onItemClick: (item) => item },
                        { hash: '4', content: 'Item #4', onItemClick: (item) => item },
                        { hash: '5', content: 'Item #5', onItemClick: (item) => item },
                      ]}
                      toggle={<Button>Button</Button>}
                    />
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
          ]}
        />
      </Panel>

      <Panel header="Props" headerId="props">
        <ContentRoutingTabs
          id="props"
          routes={[
            {
              id: 'dropdown',
              title: 'Dropdown',
              render: () => <DropdownPropTable />,
            },
            {
              id: 'dropdown-item',
              title: 'DropdownItem',
              render: () => <DropdownItemPropTable />,
            },
            {
              id: 'dropdown-link-item',
              title: 'DropdownLinkItem',
              render: () => <DropdownLinkItemPropTable />,
            },
            {
              id: 'dropdown-item-group',
              title: 'DropdownItemGroup',
              render: () => <DropdownItemGroupPropTable />,
            },
          ]}
        />
      </Panel>

      <Panel header="Do's and Don'ts" headerId="guidelines">
        <GuidelinesTable
          discouraged={[
            'Avoid including complex information in a dropdown menu.',
            <>
              Don’t nest <Code primary>Dropdowns</Code> or use them to display complex information.
            </>,
            'Don’t use icons in dropdown items unless they provide additional and necessary context.',
          ]}
          recommended={[
            'Anchor the dropdown menu in the least obstructive position on the page.',
            'Organize dropdown items in alphabetical order or by the most relevant content.',
            'Use placeholder text by default if no selection has been made.',
          ]}
        />
      </Panel>
    </>
  );
};

export default DropdownPage;
