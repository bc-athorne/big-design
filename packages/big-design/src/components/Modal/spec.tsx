import React from 'react';

import 'jest-styled-components';
import { fireEvent, render, screen, waitFor } from '@test/utils';

import { Button } from '../Button';
import { Text } from '../Typography';

import { Modal } from './Modal';

test('render open modal', () => {
  const text = 'This is a modal';
  const { queryByText } = render(<Modal isOpen={true}>{text}</Modal>);

  expect(document.body).toMatchSnapshot();
  expect(queryByText(text)).toBeInTheDocument();
});

test('render open modal without backdrop', () => {
  const text = 'This is a modal';
  const { queryByText } = render(
    <Modal backdrop={false} isOpen={true}>
      {text}
    </Modal>,
  );

  expect(document.body).toMatchSnapshot();
  expect(queryByText(text)).toBeInTheDocument();
});

test('render closed modal', () => {
  const text = 'This is a modal';

  const { queryByText } = render(<Modal isOpen={false}>{text}</Modal>);

  expect(document.body).toMatchSnapshot();
  expect(queryByText(text)).not.toBeInTheDocument();
});

test('open/hides when props changes', () => {
  const text = 'This is a modal';
  const { queryByText, rerender } = render(<Modal isOpen={false}>{text}</Modal>);

  expect(queryByText(text)).not.toBeInTheDocument();

  rerender(<Modal isOpen={true}>{text}</Modal>);

  expect(queryByText(text)).toBeInTheDocument();
});

test('triggers onClose when pressing esc', async () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  render(
    <Modal isOpen={true} onClose={onClose}>
      {text}
    </Modal>,
  );

  const element = await screen.findByText<HTMLElement>(text);

  fireEvent.keyDown(element, { key: 'Escape' });

  expect(onClose).toHaveBeenCalled();
});

test('does not trigger onClose when pressing esc and closeOnEscKey is false', async () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  render(
    <Modal closeOnEscKey={false} isOpen={true} onClose={onClose}>
      {text}
    </Modal>,
  );

  const element = await screen.findByText<HTMLElement>(text);

  fireEvent.keyDown(element, { key: 'Escape' });

  expect(onClose).not.toHaveBeenCalled();
});

test('trigger onClose when clicking outside the modal', async () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  render(
    <Modal closeOnClickOutside={true} isOpen={true} onClose={onClose}>
      {text}
    </Modal>,
  );

  const element = await screen.findByRole<HTMLElement>('dialog');

  fireEvent.click(element);

  expect(onClose).toHaveBeenCalled();
});

test('do not trigger onClose when clicking outside the modal and closeOnClickOutside is false', async () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  render(
    <Modal isOpen={true} onClose={onClose}>
      {text}
    </Modal>,
  );

  const element = await screen.findByRole<HTMLElement>('dialog');

  fireEvent.click(element);

  expect(onClose).not.toHaveBeenCalled();
});

test('do not trigger onClose when clicking inside the modal', async () => {
  const onClose = jest.fn();

  render(
    <Modal isOpen={true} onClose={onClose}>
      <p data-testid="inside-modal">Content</p>
    </Modal>,
  );

  const element = await screen.findByTestId<HTMLElement>('inside-modal');

  fireEvent.click(element);

  expect(onClose).not.toHaveBeenCalled();
});

test('render close button on modal variation', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByTitle } = render(
    <Modal isOpen={true} onClose={onClose} variant="modal">
      {text}
    </Modal>,
  );

  expect(queryByTitle('Close')).toBeInTheDocument();
});

test('do not render close button on dialog variation', () => {
  const text = 'This is a modal';
  const onClose = jest.fn();

  const { queryByTitle, queryByText } = render(
    <Modal isOpen={true} onClose={onClose} variant="dialog">
      {text}
    </Modal>,
  );

  expect(queryByText(text)).toBeInTheDocument();
  expect(queryByTitle('Close')).not.toBeInTheDocument();
});

test('do not pull focus to open modal that is rerendered', async () => {
  const text = 'This is a modal';
  const { queryByText, queryByRole, rerender } = render(
    <Modal isOpen={false}>
      {text}
      <input id="focusTest" />
    </Modal>,
  );

  // Modal not opened
  expect(queryByText(text)).not.toBeInTheDocument();

  // Modal Opened
  rerender(
    <Modal isOpen={true}>
      {text}
      <input id="focusTest" />
    </Modal>,
  );

  // Expect Modal to have focus
  expect(queryByText(text)).toBeInTheDocument();

  await waitFor(() => expect(document.activeElement).toBe(queryByRole('dialog')));

  const input = document.getElementById('focusTest');

  // Focus on input
  if (input !== null) {
    input.focus();

    expect(input).toHaveFocus();

    // Rerender as open
    rerender(
      <Modal isOpen={true}>
        {text}
        <input id="focusTest" />
      </Modal>,
    );

    // Expect input to still have focus and not modal
    expect(input).toHaveFocus();
    expect(document.activeElement).not.toBe(queryByRole('dialog'));
  }
});

test('body has scroll locked on modal open', () => {
  const { rerender } = render(<Modal isOpen={false} />);

  expect(document.body.style.overflowY).toBe('');

  rerender(<Modal isOpen={true} />);

  expect(document.body.style.overflowY).toBe('hidden');

  rerender(<Modal isOpen={false} />);

  expect(document.body.style.overflowY).toBe('');
});

test('renders header', () => {
  const { getByText } = render(<Modal header="Header Title" isOpen={true} />);

  expect(getByText('Header Title')).toBeInTheDocument();
});

test('header ignores components', () => {
  // @ts-expect-error ignoring since header={Component} is not a valid prop
  const { container } = render(<Modal header={<Text>Header Title</Text>} isOpen={true} />);

  expect(container.querySelector('h2')).toBeNull();
});

test('renders actions', () => {
  const { getAllByRole } = render(
    <Modal actions={[{ text: 'Cancel' }, { text: 'Apply' }]} isOpen={true} />,
  );

  expect(getAllByRole('button')).toHaveLength(3);
});

test('action button triggers onClick', () => {
  const onClick = jest.fn();

  const { getAllByRole } = render(<Modal actions={[{ text: 'Apply', onClick }]} isOpen={true} />);
  const button = getAllByRole('button')[1];

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});

test('renders secondary action button', () => {
  const { getAllByRole } = render(
    <Modal actions={[{ text: 'Apply', variant: 'secondary' }]} isOpen={true} />,
  );
  const button = getAllByRole('button')[1];

  expect(button).toMatchSnapshot();
});

test('renders destructive action button', () => {
  const { getAllByRole } = render(
    <Modal actions={[{ text: 'Apply', actionType: 'destructive' }]} isOpen={true} />,
  );
  const button = getAllByRole('button')[1];

  expect(button).toMatchSnapshot();
});

test('unmounts appropriately', () => {
  const onClick = jest.fn();
  const { getByTestId, rerender, unmount } = render(<Modal isOpen={true} />);

  unmount();

  rerender(
    <Button data-testid="button" onClick={onClick}>
      Test
    </Button>,
  );

  const button = getByTestId('button');

  button.click();

  // Make sure mouse events still work for other components
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('body overflowY should reset on unmount', () => {
  const { unmount } = render(<Modal isOpen={true} />);

  expect(document.body.style.overflowY).toBe('hidden');

  unmount();

  expect(document.body.style.overflowY).toBe('');
});
