import styled from "styled-components";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: #6b7280;
    margin-bottom: 1.2rem;
  }

  & h4 {
    font-size: 2rem;
    font-weight: 400;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;

    & button:last-child {
      background-color: #b91c1c;
      color: #fef2f2;
      transition: all 0.2s;

      &:hover {
        background-color: #991b1b;
      }
    }
  }

  & button {
    color: #4b5563;
    background: #fff;
    border: 1px solid #e5e7eb;
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border-radius: 0.5rem;
    transition: all 0.2s;

    &:hover {
      background-color: #d1d5db;
    }
  }
`;
type ConfirmDeleteProps = {
  onCloseModal: () => void;
};

function ConfirmDelete({ onCloseModal }: ConfirmDeleteProps) {
  function handleDelete() {
    alert("Do something for a deletion");
    onCloseModal();
  }

  function handleClose() {
    onCloseModal();
  }
  return (
    <StyledConfirmDelete>
      <h4>Delete Person</h4>
      <p>
        Are you sure you want to delete this permanently? This action cannot be
        undone.
      </p>

      <div>
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
