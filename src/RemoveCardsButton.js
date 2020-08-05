import React from 'react';

export default function RemoveCardsButton({ removeCards }) {
  return (
    <button type="button" onClick={removeCards}>Remove Cards</button>
  )
}