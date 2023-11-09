import { ReactNode, useState } from 'react';
import { Button, Modal } from 'react-daisyui';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

type btnTypes = {
    deckTitle: string,
    deckId: number,
    onDelete: (deletedDeck: number) => void,
    icon: ReactNode
}

const DeleteDeckButton = ({ deckId, onDelete, icon }: btnTypes) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
        setModalOpen(false); // Close the modal after successful deletion
      })
      .catch((err) => {
        console.error(err);
        // Handle errors or show a notification to the user
      });
  };

  return (
    <>
      <Button onClick={() => setModalOpen(true)} color="error">{icon}</Button>

      <Modal className='text-neutral-content' open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this deck?
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeleteDeckButton;
