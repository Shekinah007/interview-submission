import React from 'react'

const Input = ({ input, index, inputArray, handleInput }) => {

    let inputElements;

    setTimeout(() => {
        inputElements = document.querySelectorAll("input");
    }, 100)

    const checkIfNumber = (number) => {
        if (!isNaN(number)) {
            return number;
        } else return ""
    }

    return (
        <input type="text" value={input} maxLength={1} onChange={(e) => {
            const newArray = inputArray.map((item, i) => {

                if (index !== i) {
                    return item
                } else {
                    return checkIfNumber(e.target.value)
                }
            })
            handleInput((prev) => {
                if (index < newArray.length - 1) {
                    inputElements[index + 1].focus()
                }
                // if (e.target.value == "") {
                //     inputElements[index - 1].focus()
                // }
                return newArray
            })
            handleInput(newArray)

            console.log(inputArray)

        }} />
    )
}

export default Input