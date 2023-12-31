import React from 'react'

const Input = ({ input, index, inputArray, handleInput }) => {

    let inputElements;

    setTimeout(() => {
        inputElements = document.querySelectorAll("input");
        inputElements[0].disabled = false;
    }, 100)

    const checkIfNumber = (number) => {
        if (!isNaN(number)) {
            return number;
        } else return ""
    }

    return (
        <input
            type="text" value={input}
            maxLength={1}
            disabled={true}
            onChange={(e) => {
                const newArray = inputArray.map((item, i) => {

                    if (index !== i) {
                        return item
                    } else {
                        return checkIfNumber(e.target.value)
                    }
                })

                handleInput(newArray)

                if (!isNaN(e.target.value)) {
                    {
                        if (!e.target.value) {
                            inputElements[index - 1].focus()
                            // focuses on previous input on deletion
                        } else if (e.target.value && index !== inputArray.length - 1) {

                            inputElements[index + 1].disabled = false;
                            inputElements[index + 1].focus()
                            // focuses on next input
                        }
                    }
                }

                // console.log(newArray)
                // console.log(inputArray)

            }} />
    )
}

export default Input