import React, { useState } from "react"
import WordleInput from "./WordleInput"

const WordleRow = ({ props }) => {
    
    const {
        wordleArray,
        value,
        inputIndex,
        correctWord,
        rowId,
        rowIndex,
        evaluateRow,
        resetInputValue,
        incrementInputIndex,
        updateEvaluateRow,
        updateCompletedWord
    } = props;

    return (
        <div>
            {
                wordleArray.map((letter, key) =>
                    <WordleInput
                        key={key}
                        props={{
                            value,
                            id: key,
                            inputIndex,
                            correctLetter: letter,
                            correctWord,
                            rowId,
                            rowIndex,
                            evaluateRow,
                            resetInputValue,
                            incrementInputIndex,
                            updateEvaluateRow,
                            updateCompletedWord
                        }}
                    />)
            }
        </div>
    )
}

export default WordleRow