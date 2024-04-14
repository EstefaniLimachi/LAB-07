import React, { useState } from "react";

export const Button = props => {
    const { text } = props;
    const [count, setCount] = useState(0);

    function handlerButton() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        alert(`Número aleatorio: ${randomNumber}`);
        // No necesitas incrementar count en 5, simplemente puedes actualizarlo a 0
        setCount(0);
    }

    return (
        <button onClick={handlerButton}>
            {text}
        </button>
    );
};
