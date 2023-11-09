import { ReactNode } from 'react';
import { Button, Modal } from 'react-daisyui';
import { useUser } from '@clerk/clerk-react';
import { useRef, useCallback } from 'react';
import axios from 'axios';

type btnTypes = {
    deckId: number,
    onDelete: (deletedDeck: number) => void,
    icon: ReactNode,
    children?: ReactNode
}

const DeleteDeckButton = ({ deckId, onDelete, icon }: btnTypes) => {

  const user = useUser().user;
  const user_id = user?.id.toString();

  const handleDelete = () => {
    axios.delete(`/delete_deck/${deckId}`, {
        params:{
            user_id: user_id,
        }
    })
      .then(() => {
        onDelete(deckId); // Update state or perform any necessary action after deletion
      })
      .catch((err) => {
        console.error(err);
        // Handle errors or show a notification to the user
      });
  };

  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  return (
    <>
      <Button onClick={handleShow} color="error">{icon}</Button>

      <Modal className='text-neutral-content' ref={ref}>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this deck?
        </Modal.Body>
        <Modal.Actions>
        <form method="dialog">
          <Button>Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </form>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeleteDeckButton;
